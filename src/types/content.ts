// TODO Look which interfaces can be replaced with File from
// @antora/content-classifier/lib/file.js

export interface FileStat {
    dev: number;
    mode: number;
    nlink: number;
    uid: number;
    gid: number;
    rdev: number;
    blksize: number;
    ino: number;
    size: number;
    blocks: number;
    atimeMs: number;
    mtimeMs: number;
    ctimeMs: number;
    birttimeMs: number;
    atime: string;
    mtime: string;
    ctime: string;
    birthtime: string;
}

export interface FileContent {
    type: string;
    data: number[];
}

export interface ContentSourceDescriptor {
    name: string;
    title: string;
    version: string;
}

export interface ContentOrigin {
    type: string;
    url: string;
    gitdir: string;
    reftype: string;
    refname: string;
    branch: string;
    startPath: string;
    worktree: string;
    fileUriPattern: string;
    webUrl: string;
    editUrlPattern: string;
    descriptor: ContentSourceDescriptor;
}

export interface FileSource {
    abspath: string;
    path: string;
    basename: string;
    stem: string;
    extname: string;
    origin: ContentOrigin;
    fileUri: string;
    editUrl: string;
}

export interface ContentFile {
    stat: FileStat;
    _contents: FileContent;
    history: string[];
    _cwd: string;
    _isVinyl: boolean;
    _symlink: null;
    src: FileSource;
}

    
export interface ContentSourceRoot {
    name: string;
    title: string;
    version: string;
    files: ContentFile[];
    origins: ContentOrigin[];
}
