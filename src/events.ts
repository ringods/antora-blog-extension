import * as types from './types';

interface BaseEvent {
    playbook: types.playbook.Playbook;
}

export interface ContextStartedEvent extends BaseEvent {
}

export interface PlaybookBuiltEvent extends BaseEvent{
}

export interface BeforeProcessEvent extends BaseEvent {
    siteAsciiDocConfig: types.SiteAsciiDocConfig;
    siteCatalog: types.SiteCatalog;
}

export interface ContentAggregatedEvent extends BaseEvent {
    siteAsciiDocConfig: types.SiteAsciiDocConfig;
    siteCatalog: types.SiteCatalog;
    uiCatalog: types.UiCatalog;
    contentAggregate: types.content.ContentSourceRoot[];
}

export interface UiLoadedEvent extends BaseEvent {
    siteAsciiDocConfig: types.SiteAsciiDocConfig;
    siteCatalog: types.SiteCatalog;
    contentCatalog: types.ContentCatalog;
    uiCatalog: types.UiCatalog;
}

export interface ContentClassifiedEvent extends BaseEvent {
    siteAsciiDocConfig: types.SiteAsciiDocConfig;
    siteCatalog: types.SiteCatalog;
    uiCatalog: types.UiCatalog;
    contentCatalog: types.ContentCatalog;
}

export interface DocumentsConvertedEvent extends BaseEvent {
    siteAsciiDocConfig: types.SiteAsciiDocConfig;
    siteCatalog: types.SiteCatalog;
    uiCatalog: types.UiCatalog;
    contentCatalog: types.ContentCatalog;
}

export interface NavigationBuiltEvent extends BaseEvent {
    siteAsciiDocConfig: types.SiteAsciiDocConfig;
    siteCatalog: types.SiteCatalog;
    contentCatalog: types.ContentCatalog;
    uiCatalog: types.UiCatalog;
    navigationCatalog: types.NavigationCatalog;
}

export interface PagesComposedEvent extends BaseEvent {
    siteAsciiDocConfig: types.SiteAsciiDocConfig;
    siteCatalog: types.SiteCatalog;
    uiCatalog: types.UiCatalog;
    contentCatalog: types.ContentCatalog;
}

export interface RedirectsProducedEvent extends BaseEvent {
    siteAsciiDocConfig: types.SiteAsciiDocConfig;
    siteCatalog: types.SiteCatalog;
    uiCatalog: types.UiCatalog;
    contentCatalog: types.ContentCatalog;
}

export interface SiteMappedEvent extends BaseEvent {
    siteAsciiDocConfig: types.SiteAsciiDocConfig;
    siteCatalog: types.SiteCatalog;
    uiCatalog: types.UiCatalog;
    contentCatalog: types.ContentCatalog;
}

export interface BeforePublishEvent extends BaseEvent {
    siteAsciiDocConfig: types.SiteAsciiDocConfig;
    siteCatalog: types.SiteCatalog;
    uiCatalog: types.UiCatalog;
    contentCatalog: types.ContentCatalog;
}

export interface SitePublishedEvent extends BaseEvent {
    siteAsciiDocConfig: types.SiteAsciiDocConfig;
    siteCatalog: types.SiteCatalog;
    uiCatalog: types.UiCatalog;
    contentCatalog: types.ContentCatalog;
    publications: types.Publications;
}

export interface ContextClosedEvent extends BaseEvent {
    siteAsciiDocConfig: types.SiteAsciiDocConfig;
    siteCatalog: types.SiteCatalog;
    contentCatalog: types.ContentCatalog;
    uiCatalog: types.UiCatalog;
}
