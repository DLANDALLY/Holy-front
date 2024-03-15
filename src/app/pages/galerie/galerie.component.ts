import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, ɵBrowserAnimationBuilder, NoopAnimationPlayer } from '@angular/animations';


@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrl: './galerie.component.scss',
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('imageTransition', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class GalerieComponent implements OnInit{
  images = [
    { url: '/assets/shootingPhoto/g_40_4sit93BPrn.jpg' },
    { url: '/assets/shootingPhoto/g_40_6JQoZ4FowR.jpg' },
    { url: '/assets/shootingPhoto/g_40_8CyZCbimmB.jpg', height: 600 },
    { url: '/assets/shootingPhoto/g_40_iuzF8SHwSE.jpg', height: 600  },
    { url: '/assets/shootingPhoto/g_40_WBsusaujbT.jpg', height: 600  },
    { url: '/assets/shootingPhoto/g_40_mKijYcKpqj.jpg', height: 600  },
  ]

  currentImageIndex = 0

  ngOnInit() {
    this.startImageCarousel();
  }

  public startImageCarousel() {

    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, 500);
  }
}
