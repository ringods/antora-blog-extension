class BlogExtension {

  // private startTime;
  private context;

  static register() {
    new BlogExtension(this)
  }

  constructor(generatorContext: any) {
    ;(this.context = generatorContext)
    .on('playbookBuilt', this.onPlaybookBuilt.bind(this))
    .on('sitePublished', this.onSitePublished.bind(this))
  }

  onPlaybookBuilt() {
    // this.startTime = new Date()
    const logger = this.context.getLogger('@ringods/antora-blog-extension')
    logger.info('antora-blog-extension.onPlaybookBuilt')
  }

  onSitePublished() {
    // const elapsed = (new Date() - this.startTime) / 1000
    const logger = this.context.getLogger('antora-blog-extension')
    logger.info('antora-blog-extension.onSitePublished')
    // logger.info(`elapsed time: ${elapsed}s`)
  }
}

module.exports = BlogExtension
