import {Component, OnDestroy, OnInit} from '@angular/core';
import {ToastService} from "@app/core/ui/services/toast/toast.service";
import {Subscription} from "rxjs";
import {ExplorerService} from "@app/core/services/explorer/explorer.service";
import {HttpErrorResponse} from "@angular/common/http";
import {GetMimeTypeOfBase64} from "@app/core/utils/validations/validations";
import {Prediction} from "@app/core/models/response";

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent implements OnInit, OnDestroy {

  private _subscriptions: Subscription = new Subscription();

  public fileName: string = '';
  public fileSize: string = '';
  public accept: string = '.pdf, .jpg, .png';
  public isBlockPage: boolean = false;
  private file!: File;
  public imageResult: string = '';
  public resultJSON: Prediction[] = [];

  constructor(
    private _messageService: ToastService,
    private _explorerService: ExplorerService
  ) {
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

  ngOnInit(): void {
  }


  public async uploadFile(doc: any) {
    let file: File = doc.target.files[0];
    this.fileName = '';
    this.fileSize = '';
    if (file) {
      this.fileName = file.name;
      this.fileSize = Number(file.size) > 0 ? ((Number(file.size) / 10485760)).toFixed(3) : '0';
      this.file = file;
    }
  }

  public getPredictions(): void {
    this.isBlockPage = true;

    if (!this.file) {
      this._messageService.add({type: 'warning', message: 'Debe cargar la imagen a analizar', life: 5000});
      return;
    }

    const formData = new FormData();
    formData.append('img-encoding', this.file);

    this._subscriptions.add(
      this._explorerService.getPredictions(formData).subscribe({
        next: (res) => {
          this.isBlockPage = false;
          if (res.error) {
            this._messageService.add({type: 'error', message: res.msg, life: 5000});
            return
          }

          this._messageService.add({type: res.type, message: res.msg, life: 5000});
          this.imageResult = `data:${GetMimeTypeOfBase64(res.data.file)};base64,${res.data.file}`;
          this.resultJSON = res.data.predictions;

        },
        error: (err: HttpErrorResponse) => {
          console.error(err);
          this._messageService.add({
            type: 'error',
            message: 'No se pudo obtener las predicciones, intente de nuevo',
            life: 5000,
          });
          this.isBlockPage = false;
        }
      })
    )
  }

}