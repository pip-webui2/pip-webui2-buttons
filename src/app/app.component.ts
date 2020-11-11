import { Location } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { PipThemesService, Theme } from 'pip-webui2-themes';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppTranslations } from './app.strings';
import { ExmapleListItem } from './examples-list/shared/ExampleListItem';
import { combineLatestMap } from './utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private subs = new Subscription();
  public listIndex = 0;
  public mode: string;
  public app = 'Buttons';
  public url: string;

  public ctx$: Observable<{
    activeMediaQuery: boolean
  }>;
  public themes: Theme[];
  public theme: Theme;
  public languages = ['en', 'ru'];
  public language: string;

  public list: ExmapleListItem[] = [
    {
      name: 'Drilldown list',
      id: 'drilldown_list',
      route: 'drilldown_list'
    },
    {
      name: 'Action list',
      id: 'action_list',
      route: 'action_list'
    },
    {
      name: 'Toggle buttons',
      id: 'toggle_buttons',
      route: 'toggle_buttons'
    },
    {
      name: 'Fab speed dial',
      id: 'fab_speed_dial',
      route: 'fab_speed_dial'
    }
  ];
  @ViewChild('sidenav') sidenav: MatSidenav;

  public constructor(
    private themeService: PipThemesService,
    private router: Router,
    private location: Location,
    public media: MediaObserver,
    private translate: TranslateService
  ) {
    this.themes = this.themeService.themesArray;
    this.theme = this.themeService.currentTheme;

    this.translate.addLangs(this.languages);
    Object.entries(AppTranslations).forEach(e => this.translate.setTranslation(e[0], e[1], true));
    this.translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
    this.language = this.translate.currentLang;

    this.ctx$ = combineLatestMap({
      activeMediaQuery: media.asObservable().pipe((map(changes => changes && changes.some(c => c.mqAlias === 'xs'))))
    });

    this.subs.add(router.events.subscribe((url: any) => {

      if (url.url && url.url !== this.url) {
        this.url = url.url;
        this.listIndex = this.list.findIndex((item) => {
          return '/' + item.route === this.url;
        });

        this.listIndex = this.listIndex < 0 ? 0 : this.listIndex;
      }
    }));
  }

  public ngOnInit() {
    this.listIndex = Math.max(0, this.list.findIndex((item) => {
      return '/' + item.route === this.location.path();
    }));
  }

  public onListItemIndexChanged(index: number) {
    this.listIndex = index;
    this.sidenav.close();
  }

  public changeTheme(theme: Theme) {
    this.theme = theme;
    this.themeService.selectTheme(theme.name);
  }

  public changeLanguage(language: string) {
    this.language = language;
    this.translate.use(language);
  }
}
