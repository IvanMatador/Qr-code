import { Injectable } from '@angular/core';
import * as pdfjs from 'pdfjs-dist';

@Injectable({
  providedIn: 'root'
})
export class PdfConverterService {

  constructor() { }

    /**
     * Converts a file to a Uint8Array.
     * @param file The file to convert.
     * @returns A Promise that resolves with the converted Uint8Array.
     */
    async fileToUint8Array(file: File): Promise<Uint8Array> {
      return new Promise<Uint8Array>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const arrayBuffer = reader.result as ArrayBuffer;
          const uint8Array = new Uint8Array(arrayBuffer);
          resolve(uint8Array);
        };
        reader.onerror = () => {
          reject(reader.error);
        };
        reader.readAsArrayBuffer(file);
      });
    }

    displayFile(data: Uint8Array, name: string): void {
      const blob = new Blob([data], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      // Open in this tab
      window.location.href = url;
      // Next in new tab
      // }
      // const newTab = window.open(url);

      // if(!newTab) {
      //   console.error('Failed to open new tab');
      // }
      // // Revoke the object URL when the new tab is closed
      // newTab!.onbeforeunload = () => { URL.revokeObjectURL(url);
      //   };
    }


}
