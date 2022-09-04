import internal from "stream";

export interface Antora {
    generator: string;
    extensions: string[];
}

export interface Site {
    startPage: string;
    title: string;
    url: string;
    keys: Record<string, string>;
}

export interface ContentSource {
    url: string;
    branches: string; // ?? | string[];
    startPath: string;
}

export interface Content {
    branches: string[];
    editUrl: boolean;
    sources: ContentSource[]
}

export interface UiBundle {
    url: string;
    snapshot: boolean;
    startPath: string;
}

export interface UI {
    bundle: UiBundle;
    outputDir: string;
}

export interface AsciiDoc {
    attributes: Record<string, string>;
    extensions: string[];
    sourcemap: boolean;
}

export interface Git {
    credentials: Record<string, string>;
    ensureGitSuffix: boolean;
    fetchConcurrency: number;
    plugins: Record<string, string>;
}

export interface LogDestination {
    append: boolean;
    bufferSize: number;
    sync: boolean;
}

export interface Log {
    level: string;
    levelFormat: string;
    failureLevel: string;
    format: string
    destination: LogDestination;
}

export interface Runtime {
    fetch: boolean;
    quiet: boolean;
    silent: boolean;
    log: Log;
}

export interface Urls {
    htmlExtensionStyle: string;
    redirectFacility: string;
}

export interface Output {
    clean: boolean;
    dir: string;
}

export interface Playbook {
    antora: Antora;
    site: Site;
    content: Content;
    ui: UI;
    asciidoc: AsciiDoc;
    git: Git;
    network: Object;
    runtime: Runtime;
    urls: Urls;
    output: Output;
    file: string;
    dir: string;
    env: Record<string,string>;
}
