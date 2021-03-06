import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
  ChangeDetectionStrategy,
  AfterViewInit,
  OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { VerseTagKey, VerseTag } from '../models/tags';
import { first, difference } from 'lodash';
import { MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';
import { QueryParamService } from '../services/query-param.service';
import { ScreenSizeService } from '../services/screen-size.service';
import { IonContent } from '@ionic/angular';
import { takeUntil, throttleTime } from 'rxjs/operators';
import { Subject, asyncScheduler } from 'rxjs';

const TAG_PARAM = 'tags';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: MAT_TOOLTIP_DEFAULT_OPTIONS,
      useValue: { showDelay: 500, hideDelay: 0, touchendHideDelay: 3000 }
    }
  ]
})
export class TagListComponent implements AfterViewInit, OnDestroy {

  @Input()
  set multiple(multiple: boolean) {
    if (this._multiple !== multiple) {
      this._multiple = multiple;
      if (multiple) {
        this.restoreCachedSelection();
      } else {
        this.reduceSelectionToLastSelected();
      }
    }
  }
  get multiple(): boolean {
    return this._multiple;
  }

  @Input()
  set tags(tags: VerseTag[]) {
    this._tags = tags;
    this.tagKeys = tags.map((tag) => tag.key);
  }

  get tags(): VerseTag[] {
    return this._tags;
  }

  @Input()
  set activeTags(activeTags: VerseTagKey[]) {
    this._activeTags = activeTags ?? [];
    this.updateTagStates();
  }
  get activeTags(): VerseTagKey[] {
    return this._activeTags;
  }

  @Output() readonly selectedTagsChange = new EventEmitter<Array<VerseTagKey>>();

  @ViewChild('container', { static: true, read: ElementRef }) container: ElementRef<HTMLElement>;
  @ViewChild('stickyContainer', { static: true, read: ElementRef }) stickyContainer: ElementRef<HTMLElement>;

  selectedTagMap: { [key in VerseTagKey]?: true } = {};
  disabledTagMap: { [key in VerseTagKey]?: true } = {};
  collapsed = !this.screenSizeService.isVeryBigScreen;
  stickyListVisible: boolean;
  private _tags: VerseTag[] = [];
  private tagKeys: VerseTagKey[] = [];
  private _multiple: boolean;
  private _activeTags: VerseTagKey[];
  private lastSelectedTag: VerseTagKey;
  private cachedSelectedTags: VerseTagKey[];
  private selectedTags: VerseTagKey[] = [];

  private readonly destroy$ = new Subject<void>();

  private get hasSelectedTags(): boolean {
    return this.selectedTags.length > 0;
  }

  constructor(
    private readonly paramService: QueryParamService,
    private readonly screenSizeService: ScreenSizeService,
    private readonly scrollableParent: IonContent,
    private readonly ref: ChangeDetectorRef,
  ) {
    scrollableParent.ionScroll.pipe(
      throttleTime(200, asyncScheduler, {leading: false, trailing: true}),
      takeUntil(this.destroy$),
    ).subscribe(() => this.updateStickyList());
  }

  ngAfterViewInit(): void {
    this.paramService.loadParams(TAG_PARAM, tags => {
      this.setSelectedTags(tags as VerseTagKey[]);
    });

    this.cacheSelectedTags();
    this.lastSelectedTag = first(this.cachedSelectedTags);
    this.updateTagStates();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  tagClicked(tag: VerseTagKey) {
    this.selectTag(tag, this.selectedTagMap[tag] !== true);
    const wasVisible = this.stickyListVisible;
    this.updateStickyList();
    setTimeout(() => {
      if (!this.hasSelectedTags && wasVisible) {
        this.scrollableParent.scrollToPoint(0, this.container.nativeElement.offsetTop, 500);
      }
    });
  }

  private selectTag(tag: VerseTagKey, select = true): void {
    if (select) {
      this.lastSelectedTag = tag;
    }

    if (this.multiple) {
      if (select) {
        this.setSelectedTags([...this.selectedTags, tag]);
      } else {
        this.setSelectedTags(this.selectedTags.filter((selectedTag) => selectedTag !== tag));
      }
    } else {
      if (select) {
        this.setSelectedTags([tag]);
      } else {
        this.setSelectedTags([]);
      }
    }

    this.cacheSelectedTags();
  }

  private async updateStickyList(): Promise<void> {
    const containerElem = this.container.nativeElement;
    const stickyListHeight = this.stickyContainer.nativeElement.clientHeight;
    const scrollThreshold = containerElem.offsetTop + (containerElem.clientHeight - stickyListHeight);

    const scroll = (await this.scrollableParent.getScrollElement()).scrollTop;

    const crossedScrollThreshold = scroll > scrollThreshold;
    this.stickyListVisible = this.hasSelectedTags && crossedScrollThreshold;

    this.collapsed = !this.screenSizeService.isVeryBigScreen;
    this.ref.markForCheck();
  }

  private updateTagStates(): void {
    this.disabledTagMap = {};
    if (this.activeTags.length > 0 && this.activeTags.length < this.tags.length) {
      difference(this.tagKeys, this.activeTags).forEach((tag) => this.disabledTagMap[tag] = true);
    }
  }

  private reduceSelectionToLastSelected() {
    if (this.selectedTags.length > 1) {
      this.setSelectedTags([this.lastSelectedTag]);
    }
  }

  private restoreCachedSelection() {
    if (this.cachedSelectedTags?.length) {
      this.setSelectedTags(this.cachedSelectedTags);
    }
  }

  private selectedTagsChanged(saveToUrl = true): void {
    const selectedTags = this.selectedTags;
    this.selectedTagsChange.emit(selectedTags);
    this.paramService.saveParam(TAG_PARAM, selectedTags, saveToUrl);
  }

  private cacheSelectedTags(): void {
    this.cachedSelectedTags = this.selectedTags;
  }

  private setSelectedTags(tags: VerseTagKey[]): void {
    this.selectedTags = tags;
    this.selectedTagMap = {};
    tags.forEach((tag) => this.selectedTagMap[tag] = true);
    this.selectedTagsChanged();
  }
}
