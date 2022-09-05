import * as events from './events';

class BlogExtension {

  private context;

  static register() {
    new BlogExtension(this)
  }

  constructor(generatorContext: any) {
    ;(this.context = generatorContext)
    .on('contextStarted', this.onContextStarted.bind(this))
    .on('playbookBuilt', this.onPlaybookBuilt.bind(this))
    .on('beforeProcess', this.onBeforeProcess.bind(this))
    .on('contentAggregated', this.onContentAggregated.bind(this))
    .on('uiLoaded', this.onUiLoaded.bind(this))
    .on('contentClassified', this.onContentClassified.bind(this))
    .on('documentsConverted', this.onDocumentsConverted.bind(this))
    .on('navigationBuilt', this.onNavigationBuilt.bind(this))
    .on('pagesComposed', this.onPagesComposed.bind(this))
    .on('redirectsProduced', this.onRedirectsProduced.bind(this))
    .on('siteMapped', this.onSiteMapped.bind(this))
    .on('beforePublish', this.onBeforePublish.bind(this))
    .on('sitePublished', this.onSitePublished.bind(this))
    .on('contextStopped', this.onContextStopped.bind(this))
    .on('contextClosed', this.onContextClosed.bind(this))
  }

  onContextStarted(event: events.ContextStartedEvent) {
  }

  onPlaybookBuilt(event: events.PlaybookBuiltEvent) {
  }
  
  onBeforeProcess(event: events.BeforeProcessEvent) {
  }

  onContentAggregated(event: events.ContentAggregatedEvent) {
  }

  onUiLoaded(event: events.UiLoadedEvent) {
  }

  onContentClassified(event: events.ContentClassifiedEvent) {
  }

  onDocumentsConverted(event: events.DocumentsConvertedEvent) {
  }

  onNavigationBuilt(navigationBuiltEvent: events.NavigationBuiltEvent) {
  }

  onPagesComposed(event: events.PagesComposedEvent) {
  }

  onRedirectsProduced(event: events.RedirectsProducedEvent) {
  }

  onSiteMapped(event: events.SiteMappedEvent) {
  }

  onBeforePublish(event: events.BeforePublishEvent) {
  }

  onSitePublished(event: events.SitePublishedEvent) {
  }

  onContextStopped(event: Object) {
    // Not invoked
  }

  onContextClosed(event: events.ContextClosedEvent) {
  }

}

module.exports = BlogExtension
