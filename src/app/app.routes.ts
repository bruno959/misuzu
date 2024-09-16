import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BusinessComponent } from './business/business.component';
import { CompanyComponent } from './company/company.component';
import { ContactComponent } from './contact/contact.component';
import { HistoryComponent } from './history/history.component';
import { LocationComponent } from './location/location.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { TopComponent } from './top/top.component';


export const routes: Routes = [{
    path: '',
    children: [
        {
            path: '',
            component: TopComponent,
            data: {
                title: 'トップページ - site_name',
            }
        },
        {
            path: 'about',
            component: AboutComponent,
            data: {
                title: 'ご挨拶 - site_name',
            }
        },
        {
            path: 'business',
            component: BusinessComponent,
            data: {
                title: '事業内容 - site_name',
            }
        },
        {
            path: 'company',
            component: CompanyComponent,
            data: {
                title: '会社概要 - site_name',
            }
        },
        {
            path: 'contact',
            component: ContactComponent,
            data: {
                title: 'お問い合せ - site_name',
            }
        },
        {
            path: 'history',
            component: HistoryComponent,
            data: {
                title: '沿革 - site_name',
            }
        },
        {
            path: 'location',
            component: LocationComponent,
            data: {
                title: '所在地 - site_name',
            }
        },
        {
            path: 'recruitment',
            component: RecruitmentComponent,
            data: {
                title: '採用情報 - site_name',
            }
        },
    ]
}];
