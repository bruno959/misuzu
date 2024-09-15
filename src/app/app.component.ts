import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';
import { site } from '../../package.json';
import { RouterModule } from '@angular/router'; // 追加


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterModule]
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private titleService: Title) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let child = this.activatedRoute.firstChild;
          while (child && child.firstChild) {
            child = child.firstChild;
          }
          if (child && child.snapshot.data['title']) {
            return child.snapshot.data['title'].replace('site_name', site);
          }
          return '株式会社ミスズ';
        })
      )
      .subscribe((title: string) => {
        this.titleService.setTitle(title);
      });
  }
}
