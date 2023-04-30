import { Component } from '@angular/core';
import { IdGeneratorService } from './services/id-generator.service';
import { PdfConverterService } from './services/pdf-converter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Qr-docs';

  file: any;

  constructor(private qr: IdGeneratorService, private readerService: PdfConverterService) {}

  ngOnInit() {
    console.log(this.qr.generateId())
  }

  async onFileSelected(event: any) {
    const file = event.target.files[0];
    const uint8Array = await this.readerService.fileToUint8Array(file);
    console.log('File converted to Uint8Array:', uint8Array);
    this.file = uint8Array;
  }

  convert() {
    if(this.file) {
      this.readerService.displayFile(this.file, 'file');
    }
  }
}
