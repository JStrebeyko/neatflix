type entryList = Array<{}>

export interface Store {
    entryPool: entryList;
    apiPageNum: number;
    displayed: entryList;
}
