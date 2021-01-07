import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

/**
 * input[type="file"] 要素でファイルを取得するためのディレクティブ
 */
@Directive({
  selector: '[appFileSelect]'
})
export class FileSelectDirective {

  /**
   * ファイル選択時のイベント
   */
  @Output()
  public onFileSelect: EventEmitter<File[]> = new EventEmitter<File[]>();

  /**
   * ファイル選択時のイベント
   * 取得したファイルを引数に onFileSelect イベントを発火させる
   *
   * @param event イベント
   */
  @HostListener('change')
  public onChange(): any {
    console.log('onChange');
    this.onFileSelect.emit((event.target as any).files);
  }

}
