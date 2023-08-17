import { StringLiteral } from "typescript";

export interface ICategory {
    id: number;
    attributes: ICategoryAttribute;

}

export interface ICategoryAttribute {
    Title: string;
    Slug: string;
}

export interface IPagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

export interface IResourceMeta {
    pagination: IPagination;

}

export interface ICollectionResponse<T> { // <t> generic for collection response
  data: T;
  meta: IResourceMeta;
}

// I prefix for interface
// T for type