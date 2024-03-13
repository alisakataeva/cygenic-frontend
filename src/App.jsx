import React from 'react';
import {Routes, Route, HashRouter, BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';

import {ScrollToTop} from './components/ScrollToTop';

import WriteToTheDirector from './components/Header/WriteToTheDirector'

import BlogPage from './pages/BlogPage/BlogPage';
import BlogItemPage from './pages/BlogPage/BlogItemPage';

import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import ProjectPage from './pages/ProjectPage/ProjectPage';

import PrivacyPolicyPage from './pages/PrivacyPolicyPage/PrivacyPolicyPage';
import TermsofUsePage from './pages/TermsofUsePage/TermsofUsePage';
import ReturnConditionsPage from './pages/ReturnConditionsPage/ReturnConditionsPage';


import Integration1сPage from './pages/ServicesPage/IntegrationPage/Integration1cPage/Integration1cPage';
import IntegrationBitrix24Page
    from './pages/ServicesPage/IntegrationPage/IntegrationBitrix24Page/IntegrationBitrix24Page';

import ServerStoragePage from './pages/ServicesPage/SolutionsPage/ServerStorage/ServerStorage';
import WebsitesPage from './pages/ServicesPage/SolutionsPage/Websites/WebsitesPage';

import OfficeEquipmentPage from './pages/ServicesPage/EquipmentPage/OfficeEquipmentPage/OfficeEquipmentPage';
import CashEquipmentPage from './pages/ServicesPage/EquipmentPage/CashEquipmentPage/CashEquipmentPage';
import ServerEquitmentPage from './pages/ServicesPage/EquipmentPage/ServerEquitmentPage/ServerEquitmentPage';

import WebDesignPage from './pages/ServicesPage/DesignPage/WebDesignPage/WebDesignPage';
import ProductDesign from './pages/ServicesPage/DesignPage/ProductDesign/ProductDesign';

import SeoPage from './pages/ServicesPage/AdvertisingPage/SeoPage/SeoPage';
import SmmPage from './pages/ServicesPage/AdvertisingPage/SmmPage/SmmPage';

import AppPage from './pages/ServicesPage/DevelopmentPage/AppPage/AppPage';
import PersonalAccountsPage from './pages/ServicesPage/DevelopmentPage/PersonalAccountsPage/PersonalAccountsPage';
import SoftwarePage from './pages/ServicesPage/DevelopmentPage/SoftwarePage/SoftwarePage';
import WebsitePage from './pages/ServicesPage/DevelopmentPage/WebsitePage/WebsitePage';


import LicensesPage from './pages/ServicesPage/LicensesPage/LicensesPage';
import VacanciesPage from './pages/VacanciesPage/VacanciesPage';
import OpenVacanciesPage from './pages/VacanciesPage/OpenVacanciesPage/OpenVacanciesPage';

import ProductCard from './pages/ProductCard/ProductCard';
import Catalog from './pages/Catalog/Catalog.jsx';


import './global.css';
import {MainProvider} from "./providers/main/mainProvider.jsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import FormPage from "./pages/FormPage/FormPage.jsx";
import FormVacansiesPage from "./pages/FormVacansiesPage/FormVacansiesPage.jsx";
import ServicesPage from "./pages/ServicesPage/ServicesPage.jsx";
import WriteToTheDirectorPage from "./pages/WriteToTheDirector/WriteToTheDirector.jsx";

function App() {
    const queryClient = new QueryClient()

    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <ScrollToTop/>
                    <WriteToTheDirector/>
                    <MainProvider>
                        <main>
                            <Routes>
                                <Route path='/director' element={<WriteToTheDirectorPage/>}/>
                                <Route path='/form' element={<FormPage/>}/>
                                <Route path='/form-vacansies' element={<FormVacansiesPage/>}/>

                                <Route path="/" element={<HomePage/>}/>
                                <Route path="/about" element={<AboutPage/>}/>
                                <Route path="/contacts" element={<ContactsPage/>}/>
                                <Route path="/portfolio" element={<PortfolioPage/>}/>
                                <Route path="/portfolio/:slug" element={<ProjectPage/>}/>

                                <Route path="/vacancies/open-vacancies" element={<OpenVacanciesPage/>}/>
                                <Route path="/vacancies" element={<VacanciesPage/>}/>

                                <Route path="/privacy" element={<PrivacyPolicyPage/>}/>
                                <Route path="/terms" element={<TermsofUsePage/>}/>
                                <Route path="/return" element={<ReturnConditionsPage/>}/>
                                <Route path="/blog" element={<BlogPage/>}/>
                                <Route path="/blog/:id" element={<BlogItemPage/>}/>
                                <Route path="/services" element={<ServicesPage/>}/>

                                <Route path="/services/integration/1c" element={<Integration1сPage/>}/>
                                <Route path="/services/integration/bitrix24" element={<IntegrationBitrix24Page/>}/>

                                <Route path="/services/solutions/server-storage-support"
                                       element={<ServerStoragePage/>}/>
                                <Route path="/services/solutions/websites-online-stores" element={<WebsitesPage/>}/>

                                <Route path="/services/equipment/office" element={<OfficeEquipmentPage/>}/>
                                <Route path="/services/equipment/server" element={<ServerEquitmentPage/>}/>
                                <Route path="/services/equipment/cash" element={<CashEquipmentPage/>}/>

                                <Route path="/services/design/web" element={<WebDesignPage/>}/>
                                <Route path="/services/design/product" element={<ProductDesign/>}/>

                                <Route path="/services/advertising/seo" element={<SeoPage/>}/>
                                <Route path="/services/advertising/smm" element={<SmmPage/>}/>

                                <Route path="/services/development/app" element={<AppPage/>}/>
                                <Route path="/services/development/personal-accounts"
                                       element={<PersonalAccountsPage/>}/>
                                <Route path="/services/development/software" element={<SoftwarePage/>}/>
                                <Route path="/services/development/website" element={<WebsitePage/>}/>

                                <Route path="/services/licenses" element={<LicensesPage/>}/>

                                <Route path="/product" element={<ProductCard />}/>
                                <Route path="/catalog" element={<Catalog />}/>

                            </Routes>
                        </main>
                    </MainProvider>
                </BrowserRouter>
            </QueryClientProvider>
        </Provider>
    );
}

export default App;
