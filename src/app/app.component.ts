import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxExtendedPdfViewerModule, pdfDefaultOptions } from 'ngx-extended-pdf-viewer';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxExtendedPdfViewerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pdf-test';
  src="assets/test.pdf"

  constructor() {
    pdfDefaultOptions.assetsFolder = 'bleeding-edge'; // ✅ Correct path
  }
}
