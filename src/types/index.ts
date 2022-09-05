import * as content from './content';
export * as playbook from './playbook';

export interface SiteAsciiDocConfig {
    attributes: Record<string, string>;
    sourcemap: boolean;
}

// @antora/site-generator/lib/site-catalog.js
export interface SiteCatalog {
    addFile(file:any): undefined;
    addFiles(files:any): undefined;
    removeFile(file:any): any;
    getFiles(): any;
}

export interface UiCatalog {

}

// @antora/content-classifier/lib/content-catalog.js
export interface ContentCatalog {
    registerComponentVersion (name: string, version:string, descriptor : content.ContentSourceDescriptor): any;
    addFile(file: content.FileContent): content.FileContent;
}

export interface NavigationCatalog {
    
}

export interface Publications {
    
}

export { content };
