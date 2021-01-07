import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appUploadFile]'
})
export class UploadFileDirective {

  /**
   * ファイルドロップ時のイベント
   */
  @Output()
  public onFileDrop: EventEmitter<File[]> = new EventEmitter<File[]>();

  /**
   * ファイルが要素にドラッグされて重なった時のイベント
   * ドラッグイベントを解除しておかないとドロップイベント時にブラウザがファイルを開く動作をしてしまう
   * stopPropagation() は不要な様子
   *
   * @param event イベント
   */
  @HostListener('dragover', ['$event'])
  public onDragOver(event: any): void {
    event.preventDefault();
  }

  /**
   * ファイルドロップ時のイベント
   * 取得したファイルを引数に onFileDrop イベントを発火させる
   *
   * @param event イベント
   */
  @HostListener('drop', ['$event'])
  public onDrop(event: any): void {
    event.preventDefault();
    this.onFileDrop.emit(event.dataTransfer.files);
  }

  constructor() { }

}
