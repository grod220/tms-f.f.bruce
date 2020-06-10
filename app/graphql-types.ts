export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type ContentfulAsset = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  contentful_id?: Maybe<Scalars['String']>;
  file?: Maybe<ContentfulAssetFile>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  node_locale?: Maybe<Scalars['String']>;
  fixed?: Maybe<ContentfulFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ContentfulResolutions>;
  fluid?: Maybe<ContentfulFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ContentfulSizes>;
  resize?: Maybe<ContentfulResize>;
};


export type ContentfulAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  toFormat?: Maybe<ContentfulImageFormat>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};

export type ContentfulAssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAssetGroupConnection>;
};


export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetEdge = {
  next?: Maybe<ContentfulAsset>;
  node: ContentfulAsset;
  previous?: Maybe<ContentfulAsset>;
};

export type ContentfulAssetFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'contentful_id'
  | 'file___url'
  | 'file___details___size'
  | 'file___details___image___width'
  | 'file___details___image___height'
  | 'file___fileName'
  | 'file___contentType'
  | 'title'
  | 'description'
  | 'node_locale'
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'resize___base64'
  | 'resize___tracedSVG'
  | 'resize___src'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio';

export type ContentfulAssetFile = {
  url?: Maybe<Scalars['String']>;
  details?: Maybe<ContentfulAssetFileDetails>;
  fileName?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
};

export type ContentfulAssetFileDetails = {
  size?: Maybe<Scalars['Int']>;
  image?: Maybe<ContentfulAssetFileDetailsImage>;
};

export type ContentfulAssetFileDetailsFilterInput = {
  size?: Maybe<IntQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

export type ContentfulAssetFileDetailsImage = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  details?: Maybe<ContentfulAssetFileDetailsFilterInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
};

export type ContentfulAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAssetSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulCategory = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  menuItems?: Maybe<Array<Maybe<ContentfulMenuItem>>>;
  menu_version?: Maybe<Array<Maybe<ContentfulMenuVersion>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulCategorySys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulCategoryCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulCategoryUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulCategoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCategoryEdge>;
  nodes: Array<ContentfulCategory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulCategoryGroupConnection>;
};


export type ContentfulCategoryConnectionDistinctArgs = {
  field: ContentfulCategoryFieldsEnum;
};


export type ContentfulCategoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulCategoryFieldsEnum;
};

export type ContentfulCategoryEdge = {
  next?: Maybe<ContentfulCategory>;
  node: ContentfulCategory;
  previous?: Maybe<ContentfulCategory>;
};

export type ContentfulCategoryFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'menuItems'
  | 'menuItems___id'
  | 'menuItems___parent___id'
  | 'menuItems___parent___parent___id'
  | 'menuItems___parent___parent___children'
  | 'menuItems___parent___children'
  | 'menuItems___parent___children___id'
  | 'menuItems___parent___children___children'
  | 'menuItems___parent___internal___content'
  | 'menuItems___parent___internal___contentDigest'
  | 'menuItems___parent___internal___description'
  | 'menuItems___parent___internal___fieldOwners'
  | 'menuItems___parent___internal___ignoreType'
  | 'menuItems___parent___internal___mediaType'
  | 'menuItems___parent___internal___owner'
  | 'menuItems___parent___internal___type'
  | 'menuItems___children'
  | 'menuItems___children___id'
  | 'menuItems___children___parent___id'
  | 'menuItems___children___parent___children'
  | 'menuItems___children___children'
  | 'menuItems___children___children___id'
  | 'menuItems___children___children___children'
  | 'menuItems___children___internal___content'
  | 'menuItems___children___internal___contentDigest'
  | 'menuItems___children___internal___description'
  | 'menuItems___children___internal___fieldOwners'
  | 'menuItems___children___internal___ignoreType'
  | 'menuItems___children___internal___mediaType'
  | 'menuItems___children___internal___owner'
  | 'menuItems___children___internal___type'
  | 'menuItems___internal___content'
  | 'menuItems___internal___contentDigest'
  | 'menuItems___internal___description'
  | 'menuItems___internal___fieldOwners'
  | 'menuItems___internal___ignoreType'
  | 'menuItems___internal___mediaType'
  | 'menuItems___internal___owner'
  | 'menuItems___internal___type'
  | 'menuItems___title'
  | 'menuItems___price'
  | 'menuItems___temperature'
  | 'menuItems___image___id'
  | 'menuItems___image___parent___id'
  | 'menuItems___image___parent___children'
  | 'menuItems___image___children'
  | 'menuItems___image___children___id'
  | 'menuItems___image___children___children'
  | 'menuItems___image___internal___content'
  | 'menuItems___image___internal___contentDigest'
  | 'menuItems___image___internal___description'
  | 'menuItems___image___internal___fieldOwners'
  | 'menuItems___image___internal___ignoreType'
  | 'menuItems___image___internal___mediaType'
  | 'menuItems___image___internal___owner'
  | 'menuItems___image___internal___type'
  | 'menuItems___image___contentful_id'
  | 'menuItems___image___file___url'
  | 'menuItems___image___file___fileName'
  | 'menuItems___image___file___contentType'
  | 'menuItems___image___title'
  | 'menuItems___image___description'
  | 'menuItems___image___node_locale'
  | 'menuItems___image___fixed___base64'
  | 'menuItems___image___fixed___tracedSVG'
  | 'menuItems___image___fixed___aspectRatio'
  | 'menuItems___image___fixed___width'
  | 'menuItems___image___fixed___height'
  | 'menuItems___image___fixed___src'
  | 'menuItems___image___fixed___srcSet'
  | 'menuItems___image___fixed___srcWebp'
  | 'menuItems___image___fixed___srcSetWebp'
  | 'menuItems___image___resolutions___base64'
  | 'menuItems___image___resolutions___tracedSVG'
  | 'menuItems___image___resolutions___aspectRatio'
  | 'menuItems___image___resolutions___width'
  | 'menuItems___image___resolutions___height'
  | 'menuItems___image___resolutions___src'
  | 'menuItems___image___resolutions___srcSet'
  | 'menuItems___image___resolutions___srcWebp'
  | 'menuItems___image___resolutions___srcSetWebp'
  | 'menuItems___image___fluid___base64'
  | 'menuItems___image___fluid___tracedSVG'
  | 'menuItems___image___fluid___aspectRatio'
  | 'menuItems___image___fluid___src'
  | 'menuItems___image___fluid___srcSet'
  | 'menuItems___image___fluid___srcWebp'
  | 'menuItems___image___fluid___srcSetWebp'
  | 'menuItems___image___fluid___sizes'
  | 'menuItems___image___sizes___base64'
  | 'menuItems___image___sizes___tracedSVG'
  | 'menuItems___image___sizes___aspectRatio'
  | 'menuItems___image___sizes___src'
  | 'menuItems___image___sizes___srcSet'
  | 'menuItems___image___sizes___srcWebp'
  | 'menuItems___image___sizes___srcSetWebp'
  | 'menuItems___image___sizes___sizes'
  | 'menuItems___image___resize___base64'
  | 'menuItems___image___resize___tracedSVG'
  | 'menuItems___image___resize___src'
  | 'menuItems___image___resize___width'
  | 'menuItems___image___resize___height'
  | 'menuItems___image___resize___aspectRatio'
  | 'menuItems___options'
  | 'menuItems___options___id'
  | 'menuItems___options___parent___id'
  | 'menuItems___options___parent___children'
  | 'menuItems___options___children'
  | 'menuItems___options___children___id'
  | 'menuItems___options___children___children'
  | 'menuItems___options___internal___content'
  | 'menuItems___options___internal___contentDigest'
  | 'menuItems___options___internal___description'
  | 'menuItems___options___internal___fieldOwners'
  | 'menuItems___options___internal___ignoreType'
  | 'menuItems___options___internal___mediaType'
  | 'menuItems___options___internal___owner'
  | 'menuItems___options___internal___type'
  | 'menuItems___options___title'
  | 'menuItems___options___minimum'
  | 'menuItems___options___pricedOptionItems'
  | 'menuItems___options___pricedOptionItems___id'
  | 'menuItems___options___pricedOptionItems___children'
  | 'menuItems___options___pricedOptionItems___title'
  | 'menuItems___options___pricedOptionItems___price'
  | 'menuItems___options___pricedOptionItems___temperature'
  | 'menuItems___options___pricedOptionItems___option'
  | 'menuItems___options___pricedOptionItems___spaceId'
  | 'menuItems___options___pricedOptionItems___contentful_id'
  | 'menuItems___options___pricedOptionItems___createdAt'
  | 'menuItems___options___pricedOptionItems___updatedAt'
  | 'menuItems___options___pricedOptionItems___node_locale'
  | 'menuItems___options___menu_item'
  | 'menuItems___options___menu_item___id'
  | 'menuItems___options___menu_item___children'
  | 'menuItems___options___menu_item___title'
  | 'menuItems___options___menu_item___price'
  | 'menuItems___options___menu_item___temperature'
  | 'menuItems___options___menu_item___options'
  | 'menuItems___options___menu_item___category'
  | 'menuItems___options___menu_item___spaceId'
  | 'menuItems___options___menu_item___contentful_id'
  | 'menuItems___options___menu_item___createdAt'
  | 'menuItems___options___menu_item___updatedAt'
  | 'menuItems___options___menu_item___node_locale'
  | 'menuItems___options___menu_item___submitImageToUber'
  | 'menuItems___options___menu_item___option'
  | 'menuItems___options___spaceId'
  | 'menuItems___options___contentful_id'
  | 'menuItems___options___createdAt'
  | 'menuItems___options___updatedAt'
  | 'menuItems___options___sys___revision'
  | 'menuItems___options___node_locale'
  | 'menuItems___options___maximum'
  | 'menuItems___category'
  | 'menuItems___category___id'
  | 'menuItems___category___parent___id'
  | 'menuItems___category___parent___children'
  | 'menuItems___category___children'
  | 'menuItems___category___children___id'
  | 'menuItems___category___children___children'
  | 'menuItems___category___internal___content'
  | 'menuItems___category___internal___contentDigest'
  | 'menuItems___category___internal___description'
  | 'menuItems___category___internal___fieldOwners'
  | 'menuItems___category___internal___ignoreType'
  | 'menuItems___category___internal___mediaType'
  | 'menuItems___category___internal___owner'
  | 'menuItems___category___internal___type'
  | 'menuItems___category___title'
  | 'menuItems___category___menuItems'
  | 'menuItems___category___menuItems___id'
  | 'menuItems___category___menuItems___children'
  | 'menuItems___category___menuItems___title'
  | 'menuItems___category___menuItems___price'
  | 'menuItems___category___menuItems___temperature'
  | 'menuItems___category___menuItems___options'
  | 'menuItems___category___menuItems___category'
  | 'menuItems___category___menuItems___spaceId'
  | 'menuItems___category___menuItems___contentful_id'
  | 'menuItems___category___menuItems___createdAt'
  | 'menuItems___category___menuItems___updatedAt'
  | 'menuItems___category___menuItems___node_locale'
  | 'menuItems___category___menuItems___submitImageToUber'
  | 'menuItems___category___menuItems___option'
  | 'menuItems___category___menu_version'
  | 'menuItems___category___menu_version___id'
  | 'menuItems___category___menu_version___children'
  | 'menuItems___category___menu_version___type'
  | 'menuItems___category___menu_version___categories'
  | 'menuItems___category___menu_version___spaceId'
  | 'menuItems___category___menu_version___contentful_id'
  | 'menuItems___category___menu_version___createdAt'
  | 'menuItems___category___menu_version___updatedAt'
  | 'menuItems___category___menu_version___node_locale'
  | 'menuItems___category___spaceId'
  | 'menuItems___category___contentful_id'
  | 'menuItems___category___createdAt'
  | 'menuItems___category___updatedAt'
  | 'menuItems___category___sys___revision'
  | 'menuItems___category___node_locale'
  | 'menuItems___spaceId'
  | 'menuItems___contentful_id'
  | 'menuItems___createdAt'
  | 'menuItems___updatedAt'
  | 'menuItems___sys___revision'
  | 'menuItems___node_locale'
  | 'menuItems___description___id'
  | 'menuItems___description___parent___id'
  | 'menuItems___description___parent___children'
  | 'menuItems___description___children'
  | 'menuItems___description___children___id'
  | 'menuItems___description___children___children'
  | 'menuItems___description___internal___content'
  | 'menuItems___description___internal___contentDigest'
  | 'menuItems___description___internal___description'
  | 'menuItems___description___internal___fieldOwners'
  | 'menuItems___description___internal___ignoreType'
  | 'menuItems___description___internal___mediaType'
  | 'menuItems___description___internal___owner'
  | 'menuItems___description___internal___type'
  | 'menuItems___description___description'
  | 'menuItems___submitImageToUber'
  | 'menuItems___option'
  | 'menuItems___option___id'
  | 'menuItems___option___parent___id'
  | 'menuItems___option___parent___children'
  | 'menuItems___option___children'
  | 'menuItems___option___children___id'
  | 'menuItems___option___children___children'
  | 'menuItems___option___internal___content'
  | 'menuItems___option___internal___contentDigest'
  | 'menuItems___option___internal___description'
  | 'menuItems___option___internal___fieldOwners'
  | 'menuItems___option___internal___ignoreType'
  | 'menuItems___option___internal___mediaType'
  | 'menuItems___option___internal___owner'
  | 'menuItems___option___internal___type'
  | 'menuItems___option___title'
  | 'menuItems___option___minimum'
  | 'menuItems___option___pricedOptionItems'
  | 'menuItems___option___pricedOptionItems___id'
  | 'menuItems___option___pricedOptionItems___children'
  | 'menuItems___option___pricedOptionItems___title'
  | 'menuItems___option___pricedOptionItems___price'
  | 'menuItems___option___pricedOptionItems___temperature'
  | 'menuItems___option___pricedOptionItems___option'
  | 'menuItems___option___pricedOptionItems___spaceId'
  | 'menuItems___option___pricedOptionItems___contentful_id'
  | 'menuItems___option___pricedOptionItems___createdAt'
  | 'menuItems___option___pricedOptionItems___updatedAt'
  | 'menuItems___option___pricedOptionItems___node_locale'
  | 'menuItems___option___menu_item'
  | 'menuItems___option___menu_item___id'
  | 'menuItems___option___menu_item___children'
  | 'menuItems___option___menu_item___title'
  | 'menuItems___option___menu_item___price'
  | 'menuItems___option___menu_item___temperature'
  | 'menuItems___option___menu_item___options'
  | 'menuItems___option___menu_item___category'
  | 'menuItems___option___menu_item___spaceId'
  | 'menuItems___option___menu_item___contentful_id'
  | 'menuItems___option___menu_item___createdAt'
  | 'menuItems___option___menu_item___updatedAt'
  | 'menuItems___option___menu_item___node_locale'
  | 'menuItems___option___menu_item___submitImageToUber'
  | 'menuItems___option___menu_item___option'
  | 'menuItems___option___spaceId'
  | 'menuItems___option___contentful_id'
  | 'menuItems___option___createdAt'
  | 'menuItems___option___updatedAt'
  | 'menuItems___option___sys___revision'
  | 'menuItems___option___node_locale'
  | 'menuItems___option___maximum'
  | 'menuItems___childContentfulMenuItemDescriptionTextNode___id'
  | 'menuItems___childContentfulMenuItemDescriptionTextNode___parent___id'
  | 'menuItems___childContentfulMenuItemDescriptionTextNode___parent___children'
  | 'menuItems___childContentfulMenuItemDescriptionTextNode___children'
  | 'menuItems___childContentfulMenuItemDescriptionTextNode___children___id'
  | 'menuItems___childContentfulMenuItemDescriptionTextNode___children___children'
  | 'menuItems___childContentfulMenuItemDescriptionTextNode___internal___content'
  | 'menuItems___childContentfulMenuItemDescriptionTextNode___internal___contentDigest'
  | 'menuItems___childContentfulMenuItemDescriptionTextNode___internal___description'
  | 'menuItems___childContentfulMenuItemDescriptionTextNode___internal___fieldOwners'
  | 'menuItems___childContentfulMenuItemDescriptionTextNode___internal___ignoreType'
  | 'menuItems___childContentfulMenuItemDescriptionTextNode___internal___mediaType'
  | 'menuItems___childContentfulMenuItemDescriptionTextNode___internal___owner'
  | 'menuItems___childContentfulMenuItemDescriptionTextNode___internal___type'
  | 'menuItems___childContentfulMenuItemDescriptionTextNode___description'
  | 'menu_version'
  | 'menu_version___id'
  | 'menu_version___parent___id'
  | 'menu_version___parent___parent___id'
  | 'menu_version___parent___parent___children'
  | 'menu_version___parent___children'
  | 'menu_version___parent___children___id'
  | 'menu_version___parent___children___children'
  | 'menu_version___parent___internal___content'
  | 'menu_version___parent___internal___contentDigest'
  | 'menu_version___parent___internal___description'
  | 'menu_version___parent___internal___fieldOwners'
  | 'menu_version___parent___internal___ignoreType'
  | 'menu_version___parent___internal___mediaType'
  | 'menu_version___parent___internal___owner'
  | 'menu_version___parent___internal___type'
  | 'menu_version___children'
  | 'menu_version___children___id'
  | 'menu_version___children___parent___id'
  | 'menu_version___children___parent___children'
  | 'menu_version___children___children'
  | 'menu_version___children___children___id'
  | 'menu_version___children___children___children'
  | 'menu_version___children___internal___content'
  | 'menu_version___children___internal___contentDigest'
  | 'menu_version___children___internal___description'
  | 'menu_version___children___internal___fieldOwners'
  | 'menu_version___children___internal___ignoreType'
  | 'menu_version___children___internal___mediaType'
  | 'menu_version___children___internal___owner'
  | 'menu_version___children___internal___type'
  | 'menu_version___internal___content'
  | 'menu_version___internal___contentDigest'
  | 'menu_version___internal___description'
  | 'menu_version___internal___fieldOwners'
  | 'menu_version___internal___ignoreType'
  | 'menu_version___internal___mediaType'
  | 'menu_version___internal___owner'
  | 'menu_version___internal___type'
  | 'menu_version___type'
  | 'menu_version___categories'
  | 'menu_version___categories___id'
  | 'menu_version___categories___parent___id'
  | 'menu_version___categories___parent___children'
  | 'menu_version___categories___children'
  | 'menu_version___categories___children___id'
  | 'menu_version___categories___children___children'
  | 'menu_version___categories___internal___content'
  | 'menu_version___categories___internal___contentDigest'
  | 'menu_version___categories___internal___description'
  | 'menu_version___categories___internal___fieldOwners'
  | 'menu_version___categories___internal___ignoreType'
  | 'menu_version___categories___internal___mediaType'
  | 'menu_version___categories___internal___owner'
  | 'menu_version___categories___internal___type'
  | 'menu_version___categories___title'
  | 'menu_version___categories___menuItems'
  | 'menu_version___categories___menuItems___id'
  | 'menu_version___categories___menuItems___children'
  | 'menu_version___categories___menuItems___title'
  | 'menu_version___categories___menuItems___price'
  | 'menu_version___categories___menuItems___temperature'
  | 'menu_version___categories___menuItems___options'
  | 'menu_version___categories___menuItems___category'
  | 'menu_version___categories___menuItems___spaceId'
  | 'menu_version___categories___menuItems___contentful_id'
  | 'menu_version___categories___menuItems___createdAt'
  | 'menu_version___categories___menuItems___updatedAt'
  | 'menu_version___categories___menuItems___node_locale'
  | 'menu_version___categories___menuItems___submitImageToUber'
  | 'menu_version___categories___menuItems___option'
  | 'menu_version___categories___menu_version'
  | 'menu_version___categories___menu_version___id'
  | 'menu_version___categories___menu_version___children'
  | 'menu_version___categories___menu_version___type'
  | 'menu_version___categories___menu_version___categories'
  | 'menu_version___categories___menu_version___spaceId'
  | 'menu_version___categories___menu_version___contentful_id'
  | 'menu_version___categories___menu_version___createdAt'
  | 'menu_version___categories___menu_version___updatedAt'
  | 'menu_version___categories___menu_version___node_locale'
  | 'menu_version___categories___spaceId'
  | 'menu_version___categories___contentful_id'
  | 'menu_version___categories___createdAt'
  | 'menu_version___categories___updatedAt'
  | 'menu_version___categories___sys___revision'
  | 'menu_version___categories___node_locale'
  | 'menu_version___spaceId'
  | 'menu_version___contentful_id'
  | 'menu_version___createdAt'
  | 'menu_version___updatedAt'
  | 'menu_version___sys___revision'
  | 'menu_version___node_locale'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale';

export type ContentfulCategoryFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  menuItems?: Maybe<ContentfulMenuItemFilterListInput>;
  menu_version?: Maybe<ContentfulMenuVersionFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulCategorySysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulCategoryFilterListInput = {
  elemMatch?: Maybe<ContentfulCategoryFilterInput>;
};

export type ContentfulCategoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCategoryEdge>;
  nodes: Array<ContentfulCategory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulCategorySortInput = {
  fields?: Maybe<Array<Maybe<ContentfulCategoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulCategorySys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulCategorySysContentType>;
};

export type ContentfulCategorySysContentType = {
  sys?: Maybe<ContentfulCategorySysContentTypeSys>;
};

export type ContentfulCategorySysContentTypeFilterInput = {
  sys?: Maybe<ContentfulCategorySysContentTypeSysFilterInput>;
};

export type ContentfulCategorySysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulCategorySysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulCategorySysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulCategorySysContentTypeFilterInput>;
};

export type ContentfulContentType = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  displayField?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulContentTypeGroupConnection>;
};


export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeEdge = {
  next?: Maybe<ContentfulContentType>;
  node: ContentfulContentType;
  previous?: Maybe<ContentfulContentType>;
};

export type ContentfulContentTypeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'displayField'
  | 'description';

export type ContentfulContentTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulContentTypeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContentTypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulImageCropFocus = 
  | 'TOP'
  | 'TOP_LEFT'
  | 'TOP_RIGHT'
  | 'BOTTOM'
  | 'BOTTOM_RIGHT'
  | 'BOTTOM_LEFT'
  | 'RIGHT'
  | 'LEFT'
  | 'FACE'
  | 'FACES'
  | 'CENTER';

export type ContentfulImageFormat = 
  | 'NO_CHANGE'
  | 'JPG'
  | 'PNG'
  | 'WEBP';

export type ContentfulMenuItem = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  temperature?: Maybe<Array<Maybe<Scalars['String']>>>;
  image?: Maybe<ContentfulAsset>;
  options?: Maybe<Array<Maybe<ContentfulOption>>>;
  category?: Maybe<Array<Maybe<ContentfulCategory>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulMenuItemSys>;
  node_locale?: Maybe<Scalars['String']>;
  description?: Maybe<ContentfulMenuItemDescriptionTextNode>;
  submitImageToUber?: Maybe<Scalars['Boolean']>;
  option?: Maybe<Array<Maybe<ContentfulOption>>>;
  childContentfulMenuItemDescriptionTextNode?: Maybe<ContentfulMenuItemDescriptionTextNode>;
};


export type ContentfulMenuItemCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulMenuItemUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulMenuItemConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulMenuItemEdge>;
  nodes: Array<ContentfulMenuItem>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulMenuItemGroupConnection>;
};


export type ContentfulMenuItemConnectionDistinctArgs = {
  field: ContentfulMenuItemFieldsEnum;
};


export type ContentfulMenuItemConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulMenuItemFieldsEnum;
};

export type ContentfulMenuItemContentfulOptionItemUnion = ContentfulMenuItem | ContentfulOptionItem;

export type ContentfulMenuItemDescriptionTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  description?: Maybe<Scalars['String']>;
};

export type ContentfulMenuItemDescriptionTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulMenuItemDescriptionTextNodeEdge>;
  nodes: Array<ContentfulMenuItemDescriptionTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulMenuItemDescriptionTextNodeGroupConnection>;
};


export type ContentfulMenuItemDescriptionTextNodeConnectionDistinctArgs = {
  field: ContentfulMenuItemDescriptionTextNodeFieldsEnum;
};


export type ContentfulMenuItemDescriptionTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulMenuItemDescriptionTextNodeFieldsEnum;
};

export type ContentfulMenuItemDescriptionTextNodeEdge = {
  next?: Maybe<ContentfulMenuItemDescriptionTextNode>;
  node: ContentfulMenuItemDescriptionTextNode;
  previous?: Maybe<ContentfulMenuItemDescriptionTextNode>;
};

export type ContentfulMenuItemDescriptionTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'description';

export type ContentfulMenuItemDescriptionTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulMenuItemDescriptionTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulMenuItemDescriptionTextNodeEdge>;
  nodes: Array<ContentfulMenuItemDescriptionTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulMenuItemDescriptionTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulMenuItemDescriptionTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulMenuItemEdge = {
  next?: Maybe<ContentfulMenuItem>;
  node: ContentfulMenuItem;
  previous?: Maybe<ContentfulMenuItem>;
};

export type ContentfulMenuItemFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'price'
  | 'temperature'
  | 'image___id'
  | 'image___parent___id'
  | 'image___parent___parent___id'
  | 'image___parent___parent___children'
  | 'image___parent___children'
  | 'image___parent___children___id'
  | 'image___parent___children___children'
  | 'image___parent___internal___content'
  | 'image___parent___internal___contentDigest'
  | 'image___parent___internal___description'
  | 'image___parent___internal___fieldOwners'
  | 'image___parent___internal___ignoreType'
  | 'image___parent___internal___mediaType'
  | 'image___parent___internal___owner'
  | 'image___parent___internal___type'
  | 'image___children'
  | 'image___children___id'
  | 'image___children___parent___id'
  | 'image___children___parent___children'
  | 'image___children___children'
  | 'image___children___children___id'
  | 'image___children___children___children'
  | 'image___children___internal___content'
  | 'image___children___internal___contentDigest'
  | 'image___children___internal___description'
  | 'image___children___internal___fieldOwners'
  | 'image___children___internal___ignoreType'
  | 'image___children___internal___mediaType'
  | 'image___children___internal___owner'
  | 'image___children___internal___type'
  | 'image___internal___content'
  | 'image___internal___contentDigest'
  | 'image___internal___description'
  | 'image___internal___fieldOwners'
  | 'image___internal___ignoreType'
  | 'image___internal___mediaType'
  | 'image___internal___owner'
  | 'image___internal___type'
  | 'image___contentful_id'
  | 'image___file___url'
  | 'image___file___details___size'
  | 'image___file___fileName'
  | 'image___file___contentType'
  | 'image___title'
  | 'image___description'
  | 'image___node_locale'
  | 'image___fixed___base64'
  | 'image___fixed___tracedSVG'
  | 'image___fixed___aspectRatio'
  | 'image___fixed___width'
  | 'image___fixed___height'
  | 'image___fixed___src'
  | 'image___fixed___srcSet'
  | 'image___fixed___srcWebp'
  | 'image___fixed___srcSetWebp'
  | 'image___resolutions___base64'
  | 'image___resolutions___tracedSVG'
  | 'image___resolutions___aspectRatio'
  | 'image___resolutions___width'
  | 'image___resolutions___height'
  | 'image___resolutions___src'
  | 'image___resolutions___srcSet'
  | 'image___resolutions___srcWebp'
  | 'image___resolutions___srcSetWebp'
  | 'image___fluid___base64'
  | 'image___fluid___tracedSVG'
  | 'image___fluid___aspectRatio'
  | 'image___fluid___src'
  | 'image___fluid___srcSet'
  | 'image___fluid___srcWebp'
  | 'image___fluid___srcSetWebp'
  | 'image___fluid___sizes'
  | 'image___sizes___base64'
  | 'image___sizes___tracedSVG'
  | 'image___sizes___aspectRatio'
  | 'image___sizes___src'
  | 'image___sizes___srcSet'
  | 'image___sizes___srcWebp'
  | 'image___sizes___srcSetWebp'
  | 'image___sizes___sizes'
  | 'image___resize___base64'
  | 'image___resize___tracedSVG'
  | 'image___resize___src'
  | 'image___resize___width'
  | 'image___resize___height'
  | 'image___resize___aspectRatio'
  | 'options'
  | 'options___id'
  | 'options___parent___id'
  | 'options___parent___parent___id'
  | 'options___parent___parent___children'
  | 'options___parent___children'
  | 'options___parent___children___id'
  | 'options___parent___children___children'
  | 'options___parent___internal___content'
  | 'options___parent___internal___contentDigest'
  | 'options___parent___internal___description'
  | 'options___parent___internal___fieldOwners'
  | 'options___parent___internal___ignoreType'
  | 'options___parent___internal___mediaType'
  | 'options___parent___internal___owner'
  | 'options___parent___internal___type'
  | 'options___children'
  | 'options___children___id'
  | 'options___children___parent___id'
  | 'options___children___parent___children'
  | 'options___children___children'
  | 'options___children___children___id'
  | 'options___children___children___children'
  | 'options___children___internal___content'
  | 'options___children___internal___contentDigest'
  | 'options___children___internal___description'
  | 'options___children___internal___fieldOwners'
  | 'options___children___internal___ignoreType'
  | 'options___children___internal___mediaType'
  | 'options___children___internal___owner'
  | 'options___children___internal___type'
  | 'options___internal___content'
  | 'options___internal___contentDigest'
  | 'options___internal___description'
  | 'options___internal___fieldOwners'
  | 'options___internal___ignoreType'
  | 'options___internal___mediaType'
  | 'options___internal___owner'
  | 'options___internal___type'
  | 'options___title'
  | 'options___minimum'
  | 'options___pricedOptionItems'
  | 'options___pricedOptionItems___id'
  | 'options___pricedOptionItems___parent___id'
  | 'options___pricedOptionItems___parent___children'
  | 'options___pricedOptionItems___children'
  | 'options___pricedOptionItems___children___id'
  | 'options___pricedOptionItems___children___children'
  | 'options___pricedOptionItems___internal___content'
  | 'options___pricedOptionItems___internal___contentDigest'
  | 'options___pricedOptionItems___internal___description'
  | 'options___pricedOptionItems___internal___fieldOwners'
  | 'options___pricedOptionItems___internal___ignoreType'
  | 'options___pricedOptionItems___internal___mediaType'
  | 'options___pricedOptionItems___internal___owner'
  | 'options___pricedOptionItems___internal___type'
  | 'options___pricedOptionItems___title'
  | 'options___pricedOptionItems___price'
  | 'options___pricedOptionItems___temperature'
  | 'options___pricedOptionItems___option'
  | 'options___pricedOptionItems___option___id'
  | 'options___pricedOptionItems___option___children'
  | 'options___pricedOptionItems___option___title'
  | 'options___pricedOptionItems___option___minimum'
  | 'options___pricedOptionItems___option___pricedOptionItems'
  | 'options___pricedOptionItems___option___menu_item'
  | 'options___pricedOptionItems___option___spaceId'
  | 'options___pricedOptionItems___option___contentful_id'
  | 'options___pricedOptionItems___option___createdAt'
  | 'options___pricedOptionItems___option___updatedAt'
  | 'options___pricedOptionItems___option___node_locale'
  | 'options___pricedOptionItems___option___maximum'
  | 'options___pricedOptionItems___spaceId'
  | 'options___pricedOptionItems___contentful_id'
  | 'options___pricedOptionItems___createdAt'
  | 'options___pricedOptionItems___updatedAt'
  | 'options___pricedOptionItems___sys___revision'
  | 'options___pricedOptionItems___node_locale'
  | 'options___menu_item'
  | 'options___menu_item___id'
  | 'options___menu_item___parent___id'
  | 'options___menu_item___parent___children'
  | 'options___menu_item___children'
  | 'options___menu_item___children___id'
  | 'options___menu_item___children___children'
  | 'options___menu_item___internal___content'
  | 'options___menu_item___internal___contentDigest'
  | 'options___menu_item___internal___description'
  | 'options___menu_item___internal___fieldOwners'
  | 'options___menu_item___internal___ignoreType'
  | 'options___menu_item___internal___mediaType'
  | 'options___menu_item___internal___owner'
  | 'options___menu_item___internal___type'
  | 'options___menu_item___title'
  | 'options___menu_item___price'
  | 'options___menu_item___temperature'
  | 'options___menu_item___image___id'
  | 'options___menu_item___image___children'
  | 'options___menu_item___image___contentful_id'
  | 'options___menu_item___image___title'
  | 'options___menu_item___image___description'
  | 'options___menu_item___image___node_locale'
  | 'options___menu_item___options'
  | 'options___menu_item___options___id'
  | 'options___menu_item___options___children'
  | 'options___menu_item___options___title'
  | 'options___menu_item___options___minimum'
  | 'options___menu_item___options___pricedOptionItems'
  | 'options___menu_item___options___menu_item'
  | 'options___menu_item___options___spaceId'
  | 'options___menu_item___options___contentful_id'
  | 'options___menu_item___options___createdAt'
  | 'options___menu_item___options___updatedAt'
  | 'options___menu_item___options___node_locale'
  | 'options___menu_item___options___maximum'
  | 'options___menu_item___category'
  | 'options___menu_item___category___id'
  | 'options___menu_item___category___children'
  | 'options___menu_item___category___title'
  | 'options___menu_item___category___menuItems'
  | 'options___menu_item___category___menu_version'
  | 'options___menu_item___category___spaceId'
  | 'options___menu_item___category___contentful_id'
  | 'options___menu_item___category___createdAt'
  | 'options___menu_item___category___updatedAt'
  | 'options___menu_item___category___node_locale'
  | 'options___menu_item___spaceId'
  | 'options___menu_item___contentful_id'
  | 'options___menu_item___createdAt'
  | 'options___menu_item___updatedAt'
  | 'options___menu_item___sys___revision'
  | 'options___menu_item___node_locale'
  | 'options___menu_item___description___id'
  | 'options___menu_item___description___children'
  | 'options___menu_item___description___description'
  | 'options___menu_item___submitImageToUber'
  | 'options___menu_item___option'
  | 'options___menu_item___option___id'
  | 'options___menu_item___option___children'
  | 'options___menu_item___option___title'
  | 'options___menu_item___option___minimum'
  | 'options___menu_item___option___pricedOptionItems'
  | 'options___menu_item___option___menu_item'
  | 'options___menu_item___option___spaceId'
  | 'options___menu_item___option___contentful_id'
  | 'options___menu_item___option___createdAt'
  | 'options___menu_item___option___updatedAt'
  | 'options___menu_item___option___node_locale'
  | 'options___menu_item___option___maximum'
  | 'options___menu_item___childContentfulMenuItemDescriptionTextNode___id'
  | 'options___menu_item___childContentfulMenuItemDescriptionTextNode___children'
  | 'options___menu_item___childContentfulMenuItemDescriptionTextNode___description'
  | 'options___spaceId'
  | 'options___contentful_id'
  | 'options___createdAt'
  | 'options___updatedAt'
  | 'options___sys___revision'
  | 'options___node_locale'
  | 'options___maximum'
  | 'category'
  | 'category___id'
  | 'category___parent___id'
  | 'category___parent___parent___id'
  | 'category___parent___parent___children'
  | 'category___parent___children'
  | 'category___parent___children___id'
  | 'category___parent___children___children'
  | 'category___parent___internal___content'
  | 'category___parent___internal___contentDigest'
  | 'category___parent___internal___description'
  | 'category___parent___internal___fieldOwners'
  | 'category___parent___internal___ignoreType'
  | 'category___parent___internal___mediaType'
  | 'category___parent___internal___owner'
  | 'category___parent___internal___type'
  | 'category___children'
  | 'category___children___id'
  | 'category___children___parent___id'
  | 'category___children___parent___children'
  | 'category___children___children'
  | 'category___children___children___id'
  | 'category___children___children___children'
  | 'category___children___internal___content'
  | 'category___children___internal___contentDigest'
  | 'category___children___internal___description'
  | 'category___children___internal___fieldOwners'
  | 'category___children___internal___ignoreType'
  | 'category___children___internal___mediaType'
  | 'category___children___internal___owner'
  | 'category___children___internal___type'
  | 'category___internal___content'
  | 'category___internal___contentDigest'
  | 'category___internal___description'
  | 'category___internal___fieldOwners'
  | 'category___internal___ignoreType'
  | 'category___internal___mediaType'
  | 'category___internal___owner'
  | 'category___internal___type'
  | 'category___title'
  | 'category___menuItems'
  | 'category___menuItems___id'
  | 'category___menuItems___parent___id'
  | 'category___menuItems___parent___children'
  | 'category___menuItems___children'
  | 'category___menuItems___children___id'
  | 'category___menuItems___children___children'
  | 'category___menuItems___internal___content'
  | 'category___menuItems___internal___contentDigest'
  | 'category___menuItems___internal___description'
  | 'category___menuItems___internal___fieldOwners'
  | 'category___menuItems___internal___ignoreType'
  | 'category___menuItems___internal___mediaType'
  | 'category___menuItems___internal___owner'
  | 'category___menuItems___internal___type'
  | 'category___menuItems___title'
  | 'category___menuItems___price'
  | 'category___menuItems___temperature'
  | 'category___menuItems___image___id'
  | 'category___menuItems___image___children'
  | 'category___menuItems___image___contentful_id'
  | 'category___menuItems___image___title'
  | 'category___menuItems___image___description'
  | 'category___menuItems___image___node_locale'
  | 'category___menuItems___options'
  | 'category___menuItems___options___id'
  | 'category___menuItems___options___children'
  | 'category___menuItems___options___title'
  | 'category___menuItems___options___minimum'
  | 'category___menuItems___options___pricedOptionItems'
  | 'category___menuItems___options___menu_item'
  | 'category___menuItems___options___spaceId'
  | 'category___menuItems___options___contentful_id'
  | 'category___menuItems___options___createdAt'
  | 'category___menuItems___options___updatedAt'
  | 'category___menuItems___options___node_locale'
  | 'category___menuItems___options___maximum'
  | 'category___menuItems___category'
  | 'category___menuItems___category___id'
  | 'category___menuItems___category___children'
  | 'category___menuItems___category___title'
  | 'category___menuItems___category___menuItems'
  | 'category___menuItems___category___menu_version'
  | 'category___menuItems___category___spaceId'
  | 'category___menuItems___category___contentful_id'
  | 'category___menuItems___category___createdAt'
  | 'category___menuItems___category___updatedAt'
  | 'category___menuItems___category___node_locale'
  | 'category___menuItems___spaceId'
  | 'category___menuItems___contentful_id'
  | 'category___menuItems___createdAt'
  | 'category___menuItems___updatedAt'
  | 'category___menuItems___sys___revision'
  | 'category___menuItems___node_locale'
  | 'category___menuItems___description___id'
  | 'category___menuItems___description___children'
  | 'category___menuItems___description___description'
  | 'category___menuItems___submitImageToUber'
  | 'category___menuItems___option'
  | 'category___menuItems___option___id'
  | 'category___menuItems___option___children'
  | 'category___menuItems___option___title'
  | 'category___menuItems___option___minimum'
  | 'category___menuItems___option___pricedOptionItems'
  | 'category___menuItems___option___menu_item'
  | 'category___menuItems___option___spaceId'
  | 'category___menuItems___option___contentful_id'
  | 'category___menuItems___option___createdAt'
  | 'category___menuItems___option___updatedAt'
  | 'category___menuItems___option___node_locale'
  | 'category___menuItems___option___maximum'
  | 'category___menuItems___childContentfulMenuItemDescriptionTextNode___id'
  | 'category___menuItems___childContentfulMenuItemDescriptionTextNode___children'
  | 'category___menuItems___childContentfulMenuItemDescriptionTextNode___description'
  | 'category___menu_version'
  | 'category___menu_version___id'
  | 'category___menu_version___parent___id'
  | 'category___menu_version___parent___children'
  | 'category___menu_version___children'
  | 'category___menu_version___children___id'
  | 'category___menu_version___children___children'
  | 'category___menu_version___internal___content'
  | 'category___menu_version___internal___contentDigest'
  | 'category___menu_version___internal___description'
  | 'category___menu_version___internal___fieldOwners'
  | 'category___menu_version___internal___ignoreType'
  | 'category___menu_version___internal___mediaType'
  | 'category___menu_version___internal___owner'
  | 'category___menu_version___internal___type'
  | 'category___menu_version___type'
  | 'category___menu_version___categories'
  | 'category___menu_version___categories___id'
  | 'category___menu_version___categories___children'
  | 'category___menu_version___categories___title'
  | 'category___menu_version___categories___menuItems'
  | 'category___menu_version___categories___menu_version'
  | 'category___menu_version___categories___spaceId'
  | 'category___menu_version___categories___contentful_id'
  | 'category___menu_version___categories___createdAt'
  | 'category___menu_version___categories___updatedAt'
  | 'category___menu_version___categories___node_locale'
  | 'category___menu_version___spaceId'
  | 'category___menu_version___contentful_id'
  | 'category___menu_version___createdAt'
  | 'category___menu_version___updatedAt'
  | 'category___menu_version___sys___revision'
  | 'category___menu_version___node_locale'
  | 'category___spaceId'
  | 'category___contentful_id'
  | 'category___createdAt'
  | 'category___updatedAt'
  | 'category___sys___revision'
  | 'category___node_locale'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'description___id'
  | 'description___parent___id'
  | 'description___parent___parent___id'
  | 'description___parent___parent___children'
  | 'description___parent___children'
  | 'description___parent___children___id'
  | 'description___parent___children___children'
  | 'description___parent___internal___content'
  | 'description___parent___internal___contentDigest'
  | 'description___parent___internal___description'
  | 'description___parent___internal___fieldOwners'
  | 'description___parent___internal___ignoreType'
  | 'description___parent___internal___mediaType'
  | 'description___parent___internal___owner'
  | 'description___parent___internal___type'
  | 'description___children'
  | 'description___children___id'
  | 'description___children___parent___id'
  | 'description___children___parent___children'
  | 'description___children___children'
  | 'description___children___children___id'
  | 'description___children___children___children'
  | 'description___children___internal___content'
  | 'description___children___internal___contentDigest'
  | 'description___children___internal___description'
  | 'description___children___internal___fieldOwners'
  | 'description___children___internal___ignoreType'
  | 'description___children___internal___mediaType'
  | 'description___children___internal___owner'
  | 'description___children___internal___type'
  | 'description___internal___content'
  | 'description___internal___contentDigest'
  | 'description___internal___description'
  | 'description___internal___fieldOwners'
  | 'description___internal___ignoreType'
  | 'description___internal___mediaType'
  | 'description___internal___owner'
  | 'description___internal___type'
  | 'description___description'
  | 'submitImageToUber'
  | 'option'
  | 'option___id'
  | 'option___parent___id'
  | 'option___parent___parent___id'
  | 'option___parent___parent___children'
  | 'option___parent___children'
  | 'option___parent___children___id'
  | 'option___parent___children___children'
  | 'option___parent___internal___content'
  | 'option___parent___internal___contentDigest'
  | 'option___parent___internal___description'
  | 'option___parent___internal___fieldOwners'
  | 'option___parent___internal___ignoreType'
  | 'option___parent___internal___mediaType'
  | 'option___parent___internal___owner'
  | 'option___parent___internal___type'
  | 'option___children'
  | 'option___children___id'
  | 'option___children___parent___id'
  | 'option___children___parent___children'
  | 'option___children___children'
  | 'option___children___children___id'
  | 'option___children___children___children'
  | 'option___children___internal___content'
  | 'option___children___internal___contentDigest'
  | 'option___children___internal___description'
  | 'option___children___internal___fieldOwners'
  | 'option___children___internal___ignoreType'
  | 'option___children___internal___mediaType'
  | 'option___children___internal___owner'
  | 'option___children___internal___type'
  | 'option___internal___content'
  | 'option___internal___contentDigest'
  | 'option___internal___description'
  | 'option___internal___fieldOwners'
  | 'option___internal___ignoreType'
  | 'option___internal___mediaType'
  | 'option___internal___owner'
  | 'option___internal___type'
  | 'option___title'
  | 'option___minimum'
  | 'option___pricedOptionItems'
  | 'option___pricedOptionItems___id'
  | 'option___pricedOptionItems___parent___id'
  | 'option___pricedOptionItems___parent___children'
  | 'option___pricedOptionItems___children'
  | 'option___pricedOptionItems___children___id'
  | 'option___pricedOptionItems___children___children'
  | 'option___pricedOptionItems___internal___content'
  | 'option___pricedOptionItems___internal___contentDigest'
  | 'option___pricedOptionItems___internal___description'
  | 'option___pricedOptionItems___internal___fieldOwners'
  | 'option___pricedOptionItems___internal___ignoreType'
  | 'option___pricedOptionItems___internal___mediaType'
  | 'option___pricedOptionItems___internal___owner'
  | 'option___pricedOptionItems___internal___type'
  | 'option___pricedOptionItems___title'
  | 'option___pricedOptionItems___price'
  | 'option___pricedOptionItems___temperature'
  | 'option___pricedOptionItems___option'
  | 'option___pricedOptionItems___option___id'
  | 'option___pricedOptionItems___option___children'
  | 'option___pricedOptionItems___option___title'
  | 'option___pricedOptionItems___option___minimum'
  | 'option___pricedOptionItems___option___pricedOptionItems'
  | 'option___pricedOptionItems___option___menu_item'
  | 'option___pricedOptionItems___option___spaceId'
  | 'option___pricedOptionItems___option___contentful_id'
  | 'option___pricedOptionItems___option___createdAt'
  | 'option___pricedOptionItems___option___updatedAt'
  | 'option___pricedOptionItems___option___node_locale'
  | 'option___pricedOptionItems___option___maximum'
  | 'option___pricedOptionItems___spaceId'
  | 'option___pricedOptionItems___contentful_id'
  | 'option___pricedOptionItems___createdAt'
  | 'option___pricedOptionItems___updatedAt'
  | 'option___pricedOptionItems___sys___revision'
  | 'option___pricedOptionItems___node_locale'
  | 'option___menu_item'
  | 'option___menu_item___id'
  | 'option___menu_item___parent___id'
  | 'option___menu_item___parent___children'
  | 'option___menu_item___children'
  | 'option___menu_item___children___id'
  | 'option___menu_item___children___children'
  | 'option___menu_item___internal___content'
  | 'option___menu_item___internal___contentDigest'
  | 'option___menu_item___internal___description'
  | 'option___menu_item___internal___fieldOwners'
  | 'option___menu_item___internal___ignoreType'
  | 'option___menu_item___internal___mediaType'
  | 'option___menu_item___internal___owner'
  | 'option___menu_item___internal___type'
  | 'option___menu_item___title'
  | 'option___menu_item___price'
  | 'option___menu_item___temperature'
  | 'option___menu_item___image___id'
  | 'option___menu_item___image___children'
  | 'option___menu_item___image___contentful_id'
  | 'option___menu_item___image___title'
  | 'option___menu_item___image___description'
  | 'option___menu_item___image___node_locale'
  | 'option___menu_item___options'
  | 'option___menu_item___options___id'
  | 'option___menu_item___options___children'
  | 'option___menu_item___options___title'
  | 'option___menu_item___options___minimum'
  | 'option___menu_item___options___pricedOptionItems'
  | 'option___menu_item___options___menu_item'
  | 'option___menu_item___options___spaceId'
  | 'option___menu_item___options___contentful_id'
  | 'option___menu_item___options___createdAt'
  | 'option___menu_item___options___updatedAt'
  | 'option___menu_item___options___node_locale'
  | 'option___menu_item___options___maximum'
  | 'option___menu_item___category'
  | 'option___menu_item___category___id'
  | 'option___menu_item___category___children'
  | 'option___menu_item___category___title'
  | 'option___menu_item___category___menuItems'
  | 'option___menu_item___category___menu_version'
  | 'option___menu_item___category___spaceId'
  | 'option___menu_item___category___contentful_id'
  | 'option___menu_item___category___createdAt'
  | 'option___menu_item___category___updatedAt'
  | 'option___menu_item___category___node_locale'
  | 'option___menu_item___spaceId'
  | 'option___menu_item___contentful_id'
  | 'option___menu_item___createdAt'
  | 'option___menu_item___updatedAt'
  | 'option___menu_item___sys___revision'
  | 'option___menu_item___node_locale'
  | 'option___menu_item___description___id'
  | 'option___menu_item___description___children'
  | 'option___menu_item___description___description'
  | 'option___menu_item___submitImageToUber'
  | 'option___menu_item___option'
  | 'option___menu_item___option___id'
  | 'option___menu_item___option___children'
  | 'option___menu_item___option___title'
  | 'option___menu_item___option___minimum'
  | 'option___menu_item___option___pricedOptionItems'
  | 'option___menu_item___option___menu_item'
  | 'option___menu_item___option___spaceId'
  | 'option___menu_item___option___contentful_id'
  | 'option___menu_item___option___createdAt'
  | 'option___menu_item___option___updatedAt'
  | 'option___menu_item___option___node_locale'
  | 'option___menu_item___option___maximum'
  | 'option___menu_item___childContentfulMenuItemDescriptionTextNode___id'
  | 'option___menu_item___childContentfulMenuItemDescriptionTextNode___children'
  | 'option___menu_item___childContentfulMenuItemDescriptionTextNode___description'
  | 'option___spaceId'
  | 'option___contentful_id'
  | 'option___createdAt'
  | 'option___updatedAt'
  | 'option___sys___revision'
  | 'option___node_locale'
  | 'option___maximum'
  | 'childContentfulMenuItemDescriptionTextNode___id'
  | 'childContentfulMenuItemDescriptionTextNode___parent___id'
  | 'childContentfulMenuItemDescriptionTextNode___parent___parent___id'
  | 'childContentfulMenuItemDescriptionTextNode___parent___parent___children'
  | 'childContentfulMenuItemDescriptionTextNode___parent___children'
  | 'childContentfulMenuItemDescriptionTextNode___parent___children___id'
  | 'childContentfulMenuItemDescriptionTextNode___parent___children___children'
  | 'childContentfulMenuItemDescriptionTextNode___parent___internal___content'
  | 'childContentfulMenuItemDescriptionTextNode___parent___internal___contentDigest'
  | 'childContentfulMenuItemDescriptionTextNode___parent___internal___description'
  | 'childContentfulMenuItemDescriptionTextNode___parent___internal___fieldOwners'
  | 'childContentfulMenuItemDescriptionTextNode___parent___internal___ignoreType'
  | 'childContentfulMenuItemDescriptionTextNode___parent___internal___mediaType'
  | 'childContentfulMenuItemDescriptionTextNode___parent___internal___owner'
  | 'childContentfulMenuItemDescriptionTextNode___parent___internal___type'
  | 'childContentfulMenuItemDescriptionTextNode___children'
  | 'childContentfulMenuItemDescriptionTextNode___children___id'
  | 'childContentfulMenuItemDescriptionTextNode___children___parent___id'
  | 'childContentfulMenuItemDescriptionTextNode___children___parent___children'
  | 'childContentfulMenuItemDescriptionTextNode___children___children'
  | 'childContentfulMenuItemDescriptionTextNode___children___children___id'
  | 'childContentfulMenuItemDescriptionTextNode___children___children___children'
  | 'childContentfulMenuItemDescriptionTextNode___children___internal___content'
  | 'childContentfulMenuItemDescriptionTextNode___children___internal___contentDigest'
  | 'childContentfulMenuItemDescriptionTextNode___children___internal___description'
  | 'childContentfulMenuItemDescriptionTextNode___children___internal___fieldOwners'
  | 'childContentfulMenuItemDescriptionTextNode___children___internal___ignoreType'
  | 'childContentfulMenuItemDescriptionTextNode___children___internal___mediaType'
  | 'childContentfulMenuItemDescriptionTextNode___children___internal___owner'
  | 'childContentfulMenuItemDescriptionTextNode___children___internal___type'
  | 'childContentfulMenuItemDescriptionTextNode___internal___content'
  | 'childContentfulMenuItemDescriptionTextNode___internal___contentDigest'
  | 'childContentfulMenuItemDescriptionTextNode___internal___description'
  | 'childContentfulMenuItemDescriptionTextNode___internal___fieldOwners'
  | 'childContentfulMenuItemDescriptionTextNode___internal___ignoreType'
  | 'childContentfulMenuItemDescriptionTextNode___internal___mediaType'
  | 'childContentfulMenuItemDescriptionTextNode___internal___owner'
  | 'childContentfulMenuItemDescriptionTextNode___internal___type'
  | 'childContentfulMenuItemDescriptionTextNode___description';

export type ContentfulMenuItemFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  price?: Maybe<FloatQueryOperatorInput>;
  temperature?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFilterInput>;
  options?: Maybe<ContentfulOptionFilterListInput>;
  category?: Maybe<ContentfulCategoryFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulMenuItemSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<ContentfulMenuItemDescriptionTextNodeFilterInput>;
  submitImageToUber?: Maybe<BooleanQueryOperatorInput>;
  option?: Maybe<ContentfulOptionFilterListInput>;
  childContentfulMenuItemDescriptionTextNode?: Maybe<ContentfulMenuItemDescriptionTextNodeFilterInput>;
};

export type ContentfulMenuItemFilterListInput = {
  elemMatch?: Maybe<ContentfulMenuItemFilterInput>;
};

export type ContentfulMenuItemGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulMenuItemEdge>;
  nodes: Array<ContentfulMenuItem>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulMenuItemSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulMenuItemFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulMenuItemSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulMenuItemSysContentType>;
};

export type ContentfulMenuItemSysContentType = {
  sys?: Maybe<ContentfulMenuItemSysContentTypeSys>;
};

export type ContentfulMenuItemSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulMenuItemSysContentTypeSysFilterInput>;
};

export type ContentfulMenuItemSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulMenuItemSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulMenuItemSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulMenuItemSysContentTypeFilterInput>;
};

export type ContentfulMenuVersion = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  type?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<ContentfulCategory>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulMenuVersionSys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulMenuVersionCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulMenuVersionUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulMenuVersionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulMenuVersionEdge>;
  nodes: Array<ContentfulMenuVersion>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulMenuVersionGroupConnection>;
};


export type ContentfulMenuVersionConnectionDistinctArgs = {
  field: ContentfulMenuVersionFieldsEnum;
};


export type ContentfulMenuVersionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulMenuVersionFieldsEnum;
};

export type ContentfulMenuVersionEdge = {
  next?: Maybe<ContentfulMenuVersion>;
  node: ContentfulMenuVersion;
  previous?: Maybe<ContentfulMenuVersion>;
};

export type ContentfulMenuVersionFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'type'
  | 'categories'
  | 'categories___id'
  | 'categories___parent___id'
  | 'categories___parent___parent___id'
  | 'categories___parent___parent___children'
  | 'categories___parent___children'
  | 'categories___parent___children___id'
  | 'categories___parent___children___children'
  | 'categories___parent___internal___content'
  | 'categories___parent___internal___contentDigest'
  | 'categories___parent___internal___description'
  | 'categories___parent___internal___fieldOwners'
  | 'categories___parent___internal___ignoreType'
  | 'categories___parent___internal___mediaType'
  | 'categories___parent___internal___owner'
  | 'categories___parent___internal___type'
  | 'categories___children'
  | 'categories___children___id'
  | 'categories___children___parent___id'
  | 'categories___children___parent___children'
  | 'categories___children___children'
  | 'categories___children___children___id'
  | 'categories___children___children___children'
  | 'categories___children___internal___content'
  | 'categories___children___internal___contentDigest'
  | 'categories___children___internal___description'
  | 'categories___children___internal___fieldOwners'
  | 'categories___children___internal___ignoreType'
  | 'categories___children___internal___mediaType'
  | 'categories___children___internal___owner'
  | 'categories___children___internal___type'
  | 'categories___internal___content'
  | 'categories___internal___contentDigest'
  | 'categories___internal___description'
  | 'categories___internal___fieldOwners'
  | 'categories___internal___ignoreType'
  | 'categories___internal___mediaType'
  | 'categories___internal___owner'
  | 'categories___internal___type'
  | 'categories___title'
  | 'categories___menuItems'
  | 'categories___menuItems___id'
  | 'categories___menuItems___parent___id'
  | 'categories___menuItems___parent___children'
  | 'categories___menuItems___children'
  | 'categories___menuItems___children___id'
  | 'categories___menuItems___children___children'
  | 'categories___menuItems___internal___content'
  | 'categories___menuItems___internal___contentDigest'
  | 'categories___menuItems___internal___description'
  | 'categories___menuItems___internal___fieldOwners'
  | 'categories___menuItems___internal___ignoreType'
  | 'categories___menuItems___internal___mediaType'
  | 'categories___menuItems___internal___owner'
  | 'categories___menuItems___internal___type'
  | 'categories___menuItems___title'
  | 'categories___menuItems___price'
  | 'categories___menuItems___temperature'
  | 'categories___menuItems___image___id'
  | 'categories___menuItems___image___children'
  | 'categories___menuItems___image___contentful_id'
  | 'categories___menuItems___image___title'
  | 'categories___menuItems___image___description'
  | 'categories___menuItems___image___node_locale'
  | 'categories___menuItems___options'
  | 'categories___menuItems___options___id'
  | 'categories___menuItems___options___children'
  | 'categories___menuItems___options___title'
  | 'categories___menuItems___options___minimum'
  | 'categories___menuItems___options___pricedOptionItems'
  | 'categories___menuItems___options___menu_item'
  | 'categories___menuItems___options___spaceId'
  | 'categories___menuItems___options___contentful_id'
  | 'categories___menuItems___options___createdAt'
  | 'categories___menuItems___options___updatedAt'
  | 'categories___menuItems___options___node_locale'
  | 'categories___menuItems___options___maximum'
  | 'categories___menuItems___category'
  | 'categories___menuItems___category___id'
  | 'categories___menuItems___category___children'
  | 'categories___menuItems___category___title'
  | 'categories___menuItems___category___menuItems'
  | 'categories___menuItems___category___menu_version'
  | 'categories___menuItems___category___spaceId'
  | 'categories___menuItems___category___contentful_id'
  | 'categories___menuItems___category___createdAt'
  | 'categories___menuItems___category___updatedAt'
  | 'categories___menuItems___category___node_locale'
  | 'categories___menuItems___spaceId'
  | 'categories___menuItems___contentful_id'
  | 'categories___menuItems___createdAt'
  | 'categories___menuItems___updatedAt'
  | 'categories___menuItems___sys___revision'
  | 'categories___menuItems___node_locale'
  | 'categories___menuItems___description___id'
  | 'categories___menuItems___description___children'
  | 'categories___menuItems___description___description'
  | 'categories___menuItems___submitImageToUber'
  | 'categories___menuItems___option'
  | 'categories___menuItems___option___id'
  | 'categories___menuItems___option___children'
  | 'categories___menuItems___option___title'
  | 'categories___menuItems___option___minimum'
  | 'categories___menuItems___option___pricedOptionItems'
  | 'categories___menuItems___option___menu_item'
  | 'categories___menuItems___option___spaceId'
  | 'categories___menuItems___option___contentful_id'
  | 'categories___menuItems___option___createdAt'
  | 'categories___menuItems___option___updatedAt'
  | 'categories___menuItems___option___node_locale'
  | 'categories___menuItems___option___maximum'
  | 'categories___menuItems___childContentfulMenuItemDescriptionTextNode___id'
  | 'categories___menuItems___childContentfulMenuItemDescriptionTextNode___children'
  | 'categories___menuItems___childContentfulMenuItemDescriptionTextNode___description'
  | 'categories___menu_version'
  | 'categories___menu_version___id'
  | 'categories___menu_version___parent___id'
  | 'categories___menu_version___parent___children'
  | 'categories___menu_version___children'
  | 'categories___menu_version___children___id'
  | 'categories___menu_version___children___children'
  | 'categories___menu_version___internal___content'
  | 'categories___menu_version___internal___contentDigest'
  | 'categories___menu_version___internal___description'
  | 'categories___menu_version___internal___fieldOwners'
  | 'categories___menu_version___internal___ignoreType'
  | 'categories___menu_version___internal___mediaType'
  | 'categories___menu_version___internal___owner'
  | 'categories___menu_version___internal___type'
  | 'categories___menu_version___type'
  | 'categories___menu_version___categories'
  | 'categories___menu_version___categories___id'
  | 'categories___menu_version___categories___children'
  | 'categories___menu_version___categories___title'
  | 'categories___menu_version___categories___menuItems'
  | 'categories___menu_version___categories___menu_version'
  | 'categories___menu_version___categories___spaceId'
  | 'categories___menu_version___categories___contentful_id'
  | 'categories___menu_version___categories___createdAt'
  | 'categories___menu_version___categories___updatedAt'
  | 'categories___menu_version___categories___node_locale'
  | 'categories___menu_version___spaceId'
  | 'categories___menu_version___contentful_id'
  | 'categories___menu_version___createdAt'
  | 'categories___menu_version___updatedAt'
  | 'categories___menu_version___sys___revision'
  | 'categories___menu_version___node_locale'
  | 'categories___spaceId'
  | 'categories___contentful_id'
  | 'categories___createdAt'
  | 'categories___updatedAt'
  | 'categories___sys___revision'
  | 'categories___node_locale'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale';

export type ContentfulMenuVersionFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  type?: Maybe<StringQueryOperatorInput>;
  categories?: Maybe<ContentfulCategoryFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulMenuVersionSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulMenuVersionFilterListInput = {
  elemMatch?: Maybe<ContentfulMenuVersionFilterInput>;
};

export type ContentfulMenuVersionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulMenuVersionEdge>;
  nodes: Array<ContentfulMenuVersion>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulMenuVersionSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulMenuVersionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulMenuVersionSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulMenuVersionSysContentType>;
};

export type ContentfulMenuVersionSysContentType = {
  sys?: Maybe<ContentfulMenuVersionSysContentTypeSys>;
};

export type ContentfulMenuVersionSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulMenuVersionSysContentTypeSysFilterInput>;
};

export type ContentfulMenuVersionSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulMenuVersionSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulMenuVersionSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulMenuVersionSysContentTypeFilterInput>;
};

export type ContentfulOption = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  minimum?: Maybe<Scalars['Int']>;
  pricedOptionItems?: Maybe<Array<Maybe<ContentfulOptionItem>>>;
  menu_item?: Maybe<Array<Maybe<ContentfulMenuItem>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulOptionSys>;
  node_locale?: Maybe<Scalars['String']>;
  maximum?: Maybe<Scalars['Int']>;
  freeOptionItem?: Maybe<Array<Maybe<ContentfulMenuItemContentfulOptionItemUnion>>>;
};


export type ContentfulOptionCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulOptionUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulOptionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulOptionEdge>;
  nodes: Array<ContentfulOption>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulOptionGroupConnection>;
};


export type ContentfulOptionConnectionDistinctArgs = {
  field: ContentfulOptionFieldsEnum;
};


export type ContentfulOptionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulOptionFieldsEnum;
};

export type ContentfulOptionEdge = {
  next?: Maybe<ContentfulOption>;
  node: ContentfulOption;
  previous?: Maybe<ContentfulOption>;
};

export type ContentfulOptionFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'minimum'
  | 'pricedOptionItems'
  | 'pricedOptionItems___id'
  | 'pricedOptionItems___parent___id'
  | 'pricedOptionItems___parent___parent___id'
  | 'pricedOptionItems___parent___parent___children'
  | 'pricedOptionItems___parent___children'
  | 'pricedOptionItems___parent___children___id'
  | 'pricedOptionItems___parent___children___children'
  | 'pricedOptionItems___parent___internal___content'
  | 'pricedOptionItems___parent___internal___contentDigest'
  | 'pricedOptionItems___parent___internal___description'
  | 'pricedOptionItems___parent___internal___fieldOwners'
  | 'pricedOptionItems___parent___internal___ignoreType'
  | 'pricedOptionItems___parent___internal___mediaType'
  | 'pricedOptionItems___parent___internal___owner'
  | 'pricedOptionItems___parent___internal___type'
  | 'pricedOptionItems___children'
  | 'pricedOptionItems___children___id'
  | 'pricedOptionItems___children___parent___id'
  | 'pricedOptionItems___children___parent___children'
  | 'pricedOptionItems___children___children'
  | 'pricedOptionItems___children___children___id'
  | 'pricedOptionItems___children___children___children'
  | 'pricedOptionItems___children___internal___content'
  | 'pricedOptionItems___children___internal___contentDigest'
  | 'pricedOptionItems___children___internal___description'
  | 'pricedOptionItems___children___internal___fieldOwners'
  | 'pricedOptionItems___children___internal___ignoreType'
  | 'pricedOptionItems___children___internal___mediaType'
  | 'pricedOptionItems___children___internal___owner'
  | 'pricedOptionItems___children___internal___type'
  | 'pricedOptionItems___internal___content'
  | 'pricedOptionItems___internal___contentDigest'
  | 'pricedOptionItems___internal___description'
  | 'pricedOptionItems___internal___fieldOwners'
  | 'pricedOptionItems___internal___ignoreType'
  | 'pricedOptionItems___internal___mediaType'
  | 'pricedOptionItems___internal___owner'
  | 'pricedOptionItems___internal___type'
  | 'pricedOptionItems___title'
  | 'pricedOptionItems___price'
  | 'pricedOptionItems___temperature'
  | 'pricedOptionItems___option'
  | 'pricedOptionItems___option___id'
  | 'pricedOptionItems___option___parent___id'
  | 'pricedOptionItems___option___parent___children'
  | 'pricedOptionItems___option___children'
  | 'pricedOptionItems___option___children___id'
  | 'pricedOptionItems___option___children___children'
  | 'pricedOptionItems___option___internal___content'
  | 'pricedOptionItems___option___internal___contentDigest'
  | 'pricedOptionItems___option___internal___description'
  | 'pricedOptionItems___option___internal___fieldOwners'
  | 'pricedOptionItems___option___internal___ignoreType'
  | 'pricedOptionItems___option___internal___mediaType'
  | 'pricedOptionItems___option___internal___owner'
  | 'pricedOptionItems___option___internal___type'
  | 'pricedOptionItems___option___title'
  | 'pricedOptionItems___option___minimum'
  | 'pricedOptionItems___option___pricedOptionItems'
  | 'pricedOptionItems___option___pricedOptionItems___id'
  | 'pricedOptionItems___option___pricedOptionItems___children'
  | 'pricedOptionItems___option___pricedOptionItems___title'
  | 'pricedOptionItems___option___pricedOptionItems___price'
  | 'pricedOptionItems___option___pricedOptionItems___temperature'
  | 'pricedOptionItems___option___pricedOptionItems___option'
  | 'pricedOptionItems___option___pricedOptionItems___spaceId'
  | 'pricedOptionItems___option___pricedOptionItems___contentful_id'
  | 'pricedOptionItems___option___pricedOptionItems___createdAt'
  | 'pricedOptionItems___option___pricedOptionItems___updatedAt'
  | 'pricedOptionItems___option___pricedOptionItems___node_locale'
  | 'pricedOptionItems___option___menu_item'
  | 'pricedOptionItems___option___menu_item___id'
  | 'pricedOptionItems___option___menu_item___children'
  | 'pricedOptionItems___option___menu_item___title'
  | 'pricedOptionItems___option___menu_item___price'
  | 'pricedOptionItems___option___menu_item___temperature'
  | 'pricedOptionItems___option___menu_item___options'
  | 'pricedOptionItems___option___menu_item___category'
  | 'pricedOptionItems___option___menu_item___spaceId'
  | 'pricedOptionItems___option___menu_item___contentful_id'
  | 'pricedOptionItems___option___menu_item___createdAt'
  | 'pricedOptionItems___option___menu_item___updatedAt'
  | 'pricedOptionItems___option___menu_item___node_locale'
  | 'pricedOptionItems___option___menu_item___submitImageToUber'
  | 'pricedOptionItems___option___menu_item___option'
  | 'pricedOptionItems___option___spaceId'
  | 'pricedOptionItems___option___contentful_id'
  | 'pricedOptionItems___option___createdAt'
  | 'pricedOptionItems___option___updatedAt'
  | 'pricedOptionItems___option___sys___revision'
  | 'pricedOptionItems___option___node_locale'
  | 'pricedOptionItems___option___maximum'
  | 'pricedOptionItems___spaceId'
  | 'pricedOptionItems___contentful_id'
  | 'pricedOptionItems___createdAt'
  | 'pricedOptionItems___updatedAt'
  | 'pricedOptionItems___sys___revision'
  | 'pricedOptionItems___node_locale'
  | 'menu_item'
  | 'menu_item___id'
  | 'menu_item___parent___id'
  | 'menu_item___parent___parent___id'
  | 'menu_item___parent___parent___children'
  | 'menu_item___parent___children'
  | 'menu_item___parent___children___id'
  | 'menu_item___parent___children___children'
  | 'menu_item___parent___internal___content'
  | 'menu_item___parent___internal___contentDigest'
  | 'menu_item___parent___internal___description'
  | 'menu_item___parent___internal___fieldOwners'
  | 'menu_item___parent___internal___ignoreType'
  | 'menu_item___parent___internal___mediaType'
  | 'menu_item___parent___internal___owner'
  | 'menu_item___parent___internal___type'
  | 'menu_item___children'
  | 'menu_item___children___id'
  | 'menu_item___children___parent___id'
  | 'menu_item___children___parent___children'
  | 'menu_item___children___children'
  | 'menu_item___children___children___id'
  | 'menu_item___children___children___children'
  | 'menu_item___children___internal___content'
  | 'menu_item___children___internal___contentDigest'
  | 'menu_item___children___internal___description'
  | 'menu_item___children___internal___fieldOwners'
  | 'menu_item___children___internal___ignoreType'
  | 'menu_item___children___internal___mediaType'
  | 'menu_item___children___internal___owner'
  | 'menu_item___children___internal___type'
  | 'menu_item___internal___content'
  | 'menu_item___internal___contentDigest'
  | 'menu_item___internal___description'
  | 'menu_item___internal___fieldOwners'
  | 'menu_item___internal___ignoreType'
  | 'menu_item___internal___mediaType'
  | 'menu_item___internal___owner'
  | 'menu_item___internal___type'
  | 'menu_item___title'
  | 'menu_item___price'
  | 'menu_item___temperature'
  | 'menu_item___image___id'
  | 'menu_item___image___parent___id'
  | 'menu_item___image___parent___children'
  | 'menu_item___image___children'
  | 'menu_item___image___children___id'
  | 'menu_item___image___children___children'
  | 'menu_item___image___internal___content'
  | 'menu_item___image___internal___contentDigest'
  | 'menu_item___image___internal___description'
  | 'menu_item___image___internal___fieldOwners'
  | 'menu_item___image___internal___ignoreType'
  | 'menu_item___image___internal___mediaType'
  | 'menu_item___image___internal___owner'
  | 'menu_item___image___internal___type'
  | 'menu_item___image___contentful_id'
  | 'menu_item___image___file___url'
  | 'menu_item___image___file___fileName'
  | 'menu_item___image___file___contentType'
  | 'menu_item___image___title'
  | 'menu_item___image___description'
  | 'menu_item___image___node_locale'
  | 'menu_item___image___fixed___base64'
  | 'menu_item___image___fixed___tracedSVG'
  | 'menu_item___image___fixed___aspectRatio'
  | 'menu_item___image___fixed___width'
  | 'menu_item___image___fixed___height'
  | 'menu_item___image___fixed___src'
  | 'menu_item___image___fixed___srcSet'
  | 'menu_item___image___fixed___srcWebp'
  | 'menu_item___image___fixed___srcSetWebp'
  | 'menu_item___image___resolutions___base64'
  | 'menu_item___image___resolutions___tracedSVG'
  | 'menu_item___image___resolutions___aspectRatio'
  | 'menu_item___image___resolutions___width'
  | 'menu_item___image___resolutions___height'
  | 'menu_item___image___resolutions___src'
  | 'menu_item___image___resolutions___srcSet'
  | 'menu_item___image___resolutions___srcWebp'
  | 'menu_item___image___resolutions___srcSetWebp'
  | 'menu_item___image___fluid___base64'
  | 'menu_item___image___fluid___tracedSVG'
  | 'menu_item___image___fluid___aspectRatio'
  | 'menu_item___image___fluid___src'
  | 'menu_item___image___fluid___srcSet'
  | 'menu_item___image___fluid___srcWebp'
  | 'menu_item___image___fluid___srcSetWebp'
  | 'menu_item___image___fluid___sizes'
  | 'menu_item___image___sizes___base64'
  | 'menu_item___image___sizes___tracedSVG'
  | 'menu_item___image___sizes___aspectRatio'
  | 'menu_item___image___sizes___src'
  | 'menu_item___image___sizes___srcSet'
  | 'menu_item___image___sizes___srcWebp'
  | 'menu_item___image___sizes___srcSetWebp'
  | 'menu_item___image___sizes___sizes'
  | 'menu_item___image___resize___base64'
  | 'menu_item___image___resize___tracedSVG'
  | 'menu_item___image___resize___src'
  | 'menu_item___image___resize___width'
  | 'menu_item___image___resize___height'
  | 'menu_item___image___resize___aspectRatio'
  | 'menu_item___options'
  | 'menu_item___options___id'
  | 'menu_item___options___parent___id'
  | 'menu_item___options___parent___children'
  | 'menu_item___options___children'
  | 'menu_item___options___children___id'
  | 'menu_item___options___children___children'
  | 'menu_item___options___internal___content'
  | 'menu_item___options___internal___contentDigest'
  | 'menu_item___options___internal___description'
  | 'menu_item___options___internal___fieldOwners'
  | 'menu_item___options___internal___ignoreType'
  | 'menu_item___options___internal___mediaType'
  | 'menu_item___options___internal___owner'
  | 'menu_item___options___internal___type'
  | 'menu_item___options___title'
  | 'menu_item___options___minimum'
  | 'menu_item___options___pricedOptionItems'
  | 'menu_item___options___pricedOptionItems___id'
  | 'menu_item___options___pricedOptionItems___children'
  | 'menu_item___options___pricedOptionItems___title'
  | 'menu_item___options___pricedOptionItems___price'
  | 'menu_item___options___pricedOptionItems___temperature'
  | 'menu_item___options___pricedOptionItems___option'
  | 'menu_item___options___pricedOptionItems___spaceId'
  | 'menu_item___options___pricedOptionItems___contentful_id'
  | 'menu_item___options___pricedOptionItems___createdAt'
  | 'menu_item___options___pricedOptionItems___updatedAt'
  | 'menu_item___options___pricedOptionItems___node_locale'
  | 'menu_item___options___menu_item'
  | 'menu_item___options___menu_item___id'
  | 'menu_item___options___menu_item___children'
  | 'menu_item___options___menu_item___title'
  | 'menu_item___options___menu_item___price'
  | 'menu_item___options___menu_item___temperature'
  | 'menu_item___options___menu_item___options'
  | 'menu_item___options___menu_item___category'
  | 'menu_item___options___menu_item___spaceId'
  | 'menu_item___options___menu_item___contentful_id'
  | 'menu_item___options___menu_item___createdAt'
  | 'menu_item___options___menu_item___updatedAt'
  | 'menu_item___options___menu_item___node_locale'
  | 'menu_item___options___menu_item___submitImageToUber'
  | 'menu_item___options___menu_item___option'
  | 'menu_item___options___spaceId'
  | 'menu_item___options___contentful_id'
  | 'menu_item___options___createdAt'
  | 'menu_item___options___updatedAt'
  | 'menu_item___options___sys___revision'
  | 'menu_item___options___node_locale'
  | 'menu_item___options___maximum'
  | 'menu_item___category'
  | 'menu_item___category___id'
  | 'menu_item___category___parent___id'
  | 'menu_item___category___parent___children'
  | 'menu_item___category___children'
  | 'menu_item___category___children___id'
  | 'menu_item___category___children___children'
  | 'menu_item___category___internal___content'
  | 'menu_item___category___internal___contentDigest'
  | 'menu_item___category___internal___description'
  | 'menu_item___category___internal___fieldOwners'
  | 'menu_item___category___internal___ignoreType'
  | 'menu_item___category___internal___mediaType'
  | 'menu_item___category___internal___owner'
  | 'menu_item___category___internal___type'
  | 'menu_item___category___title'
  | 'menu_item___category___menuItems'
  | 'menu_item___category___menuItems___id'
  | 'menu_item___category___menuItems___children'
  | 'menu_item___category___menuItems___title'
  | 'menu_item___category___menuItems___price'
  | 'menu_item___category___menuItems___temperature'
  | 'menu_item___category___menuItems___options'
  | 'menu_item___category___menuItems___category'
  | 'menu_item___category___menuItems___spaceId'
  | 'menu_item___category___menuItems___contentful_id'
  | 'menu_item___category___menuItems___createdAt'
  | 'menu_item___category___menuItems___updatedAt'
  | 'menu_item___category___menuItems___node_locale'
  | 'menu_item___category___menuItems___submitImageToUber'
  | 'menu_item___category___menuItems___option'
  | 'menu_item___category___menu_version'
  | 'menu_item___category___menu_version___id'
  | 'menu_item___category___menu_version___children'
  | 'menu_item___category___menu_version___type'
  | 'menu_item___category___menu_version___categories'
  | 'menu_item___category___menu_version___spaceId'
  | 'menu_item___category___menu_version___contentful_id'
  | 'menu_item___category___menu_version___createdAt'
  | 'menu_item___category___menu_version___updatedAt'
  | 'menu_item___category___menu_version___node_locale'
  | 'menu_item___category___spaceId'
  | 'menu_item___category___contentful_id'
  | 'menu_item___category___createdAt'
  | 'menu_item___category___updatedAt'
  | 'menu_item___category___sys___revision'
  | 'menu_item___category___node_locale'
  | 'menu_item___spaceId'
  | 'menu_item___contentful_id'
  | 'menu_item___createdAt'
  | 'menu_item___updatedAt'
  | 'menu_item___sys___revision'
  | 'menu_item___node_locale'
  | 'menu_item___description___id'
  | 'menu_item___description___parent___id'
  | 'menu_item___description___parent___children'
  | 'menu_item___description___children'
  | 'menu_item___description___children___id'
  | 'menu_item___description___children___children'
  | 'menu_item___description___internal___content'
  | 'menu_item___description___internal___contentDigest'
  | 'menu_item___description___internal___description'
  | 'menu_item___description___internal___fieldOwners'
  | 'menu_item___description___internal___ignoreType'
  | 'menu_item___description___internal___mediaType'
  | 'menu_item___description___internal___owner'
  | 'menu_item___description___internal___type'
  | 'menu_item___description___description'
  | 'menu_item___submitImageToUber'
  | 'menu_item___option'
  | 'menu_item___option___id'
  | 'menu_item___option___parent___id'
  | 'menu_item___option___parent___children'
  | 'menu_item___option___children'
  | 'menu_item___option___children___id'
  | 'menu_item___option___children___children'
  | 'menu_item___option___internal___content'
  | 'menu_item___option___internal___contentDigest'
  | 'menu_item___option___internal___description'
  | 'menu_item___option___internal___fieldOwners'
  | 'menu_item___option___internal___ignoreType'
  | 'menu_item___option___internal___mediaType'
  | 'menu_item___option___internal___owner'
  | 'menu_item___option___internal___type'
  | 'menu_item___option___title'
  | 'menu_item___option___minimum'
  | 'menu_item___option___pricedOptionItems'
  | 'menu_item___option___pricedOptionItems___id'
  | 'menu_item___option___pricedOptionItems___children'
  | 'menu_item___option___pricedOptionItems___title'
  | 'menu_item___option___pricedOptionItems___price'
  | 'menu_item___option___pricedOptionItems___temperature'
  | 'menu_item___option___pricedOptionItems___option'
  | 'menu_item___option___pricedOptionItems___spaceId'
  | 'menu_item___option___pricedOptionItems___contentful_id'
  | 'menu_item___option___pricedOptionItems___createdAt'
  | 'menu_item___option___pricedOptionItems___updatedAt'
  | 'menu_item___option___pricedOptionItems___node_locale'
  | 'menu_item___option___menu_item'
  | 'menu_item___option___menu_item___id'
  | 'menu_item___option___menu_item___children'
  | 'menu_item___option___menu_item___title'
  | 'menu_item___option___menu_item___price'
  | 'menu_item___option___menu_item___temperature'
  | 'menu_item___option___menu_item___options'
  | 'menu_item___option___menu_item___category'
  | 'menu_item___option___menu_item___spaceId'
  | 'menu_item___option___menu_item___contentful_id'
  | 'menu_item___option___menu_item___createdAt'
  | 'menu_item___option___menu_item___updatedAt'
  | 'menu_item___option___menu_item___node_locale'
  | 'menu_item___option___menu_item___submitImageToUber'
  | 'menu_item___option___menu_item___option'
  | 'menu_item___option___spaceId'
  | 'menu_item___option___contentful_id'
  | 'menu_item___option___createdAt'
  | 'menu_item___option___updatedAt'
  | 'menu_item___option___sys___revision'
  | 'menu_item___option___node_locale'
  | 'menu_item___option___maximum'
  | 'menu_item___childContentfulMenuItemDescriptionTextNode___id'
  | 'menu_item___childContentfulMenuItemDescriptionTextNode___parent___id'
  | 'menu_item___childContentfulMenuItemDescriptionTextNode___parent___children'
  | 'menu_item___childContentfulMenuItemDescriptionTextNode___children'
  | 'menu_item___childContentfulMenuItemDescriptionTextNode___children___id'
  | 'menu_item___childContentfulMenuItemDescriptionTextNode___children___children'
  | 'menu_item___childContentfulMenuItemDescriptionTextNode___internal___content'
  | 'menu_item___childContentfulMenuItemDescriptionTextNode___internal___contentDigest'
  | 'menu_item___childContentfulMenuItemDescriptionTextNode___internal___description'
  | 'menu_item___childContentfulMenuItemDescriptionTextNode___internal___fieldOwners'
  | 'menu_item___childContentfulMenuItemDescriptionTextNode___internal___ignoreType'
  | 'menu_item___childContentfulMenuItemDescriptionTextNode___internal___mediaType'
  | 'menu_item___childContentfulMenuItemDescriptionTextNode___internal___owner'
  | 'menu_item___childContentfulMenuItemDescriptionTextNode___internal___type'
  | 'menu_item___childContentfulMenuItemDescriptionTextNode___description'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale'
  | 'maximum';

export type ContentfulOptionFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  minimum?: Maybe<IntQueryOperatorInput>;
  pricedOptionItems?: Maybe<ContentfulOptionItemFilterListInput>;
  menu_item?: Maybe<ContentfulMenuItemFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulOptionSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  maximum?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulOptionFilterListInput = {
  elemMatch?: Maybe<ContentfulOptionFilterInput>;
};

export type ContentfulOptionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulOptionEdge>;
  nodes: Array<ContentfulOption>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulOptionItem = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  temperature?: Maybe<Array<Maybe<Scalars['String']>>>;
  option?: Maybe<Array<Maybe<ContentfulOption>>>;
  spaceId?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulOptionItemSys>;
  node_locale?: Maybe<Scalars['String']>;
};


export type ContentfulOptionItemCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulOptionItemUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulOptionItemConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulOptionItemEdge>;
  nodes: Array<ContentfulOptionItem>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulOptionItemGroupConnection>;
};


export type ContentfulOptionItemConnectionDistinctArgs = {
  field: ContentfulOptionItemFieldsEnum;
};


export type ContentfulOptionItemConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulOptionItemFieldsEnum;
};

export type ContentfulOptionItemEdge = {
  next?: Maybe<ContentfulOptionItem>;
  node: ContentfulOptionItem;
  previous?: Maybe<ContentfulOptionItem>;
};

export type ContentfulOptionItemFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'price'
  | 'temperature'
  | 'option'
  | 'option___id'
  | 'option___parent___id'
  | 'option___parent___parent___id'
  | 'option___parent___parent___children'
  | 'option___parent___children'
  | 'option___parent___children___id'
  | 'option___parent___children___children'
  | 'option___parent___internal___content'
  | 'option___parent___internal___contentDigest'
  | 'option___parent___internal___description'
  | 'option___parent___internal___fieldOwners'
  | 'option___parent___internal___ignoreType'
  | 'option___parent___internal___mediaType'
  | 'option___parent___internal___owner'
  | 'option___parent___internal___type'
  | 'option___children'
  | 'option___children___id'
  | 'option___children___parent___id'
  | 'option___children___parent___children'
  | 'option___children___children'
  | 'option___children___children___id'
  | 'option___children___children___children'
  | 'option___children___internal___content'
  | 'option___children___internal___contentDigest'
  | 'option___children___internal___description'
  | 'option___children___internal___fieldOwners'
  | 'option___children___internal___ignoreType'
  | 'option___children___internal___mediaType'
  | 'option___children___internal___owner'
  | 'option___children___internal___type'
  | 'option___internal___content'
  | 'option___internal___contentDigest'
  | 'option___internal___description'
  | 'option___internal___fieldOwners'
  | 'option___internal___ignoreType'
  | 'option___internal___mediaType'
  | 'option___internal___owner'
  | 'option___internal___type'
  | 'option___title'
  | 'option___minimum'
  | 'option___pricedOptionItems'
  | 'option___pricedOptionItems___id'
  | 'option___pricedOptionItems___parent___id'
  | 'option___pricedOptionItems___parent___children'
  | 'option___pricedOptionItems___children'
  | 'option___pricedOptionItems___children___id'
  | 'option___pricedOptionItems___children___children'
  | 'option___pricedOptionItems___internal___content'
  | 'option___pricedOptionItems___internal___contentDigest'
  | 'option___pricedOptionItems___internal___description'
  | 'option___pricedOptionItems___internal___fieldOwners'
  | 'option___pricedOptionItems___internal___ignoreType'
  | 'option___pricedOptionItems___internal___mediaType'
  | 'option___pricedOptionItems___internal___owner'
  | 'option___pricedOptionItems___internal___type'
  | 'option___pricedOptionItems___title'
  | 'option___pricedOptionItems___price'
  | 'option___pricedOptionItems___temperature'
  | 'option___pricedOptionItems___option'
  | 'option___pricedOptionItems___option___id'
  | 'option___pricedOptionItems___option___children'
  | 'option___pricedOptionItems___option___title'
  | 'option___pricedOptionItems___option___minimum'
  | 'option___pricedOptionItems___option___pricedOptionItems'
  | 'option___pricedOptionItems___option___menu_item'
  | 'option___pricedOptionItems___option___spaceId'
  | 'option___pricedOptionItems___option___contentful_id'
  | 'option___pricedOptionItems___option___createdAt'
  | 'option___pricedOptionItems___option___updatedAt'
  | 'option___pricedOptionItems___option___node_locale'
  | 'option___pricedOptionItems___option___maximum'
  | 'option___pricedOptionItems___spaceId'
  | 'option___pricedOptionItems___contentful_id'
  | 'option___pricedOptionItems___createdAt'
  | 'option___pricedOptionItems___updatedAt'
  | 'option___pricedOptionItems___sys___revision'
  | 'option___pricedOptionItems___node_locale'
  | 'option___menu_item'
  | 'option___menu_item___id'
  | 'option___menu_item___parent___id'
  | 'option___menu_item___parent___children'
  | 'option___menu_item___children'
  | 'option___menu_item___children___id'
  | 'option___menu_item___children___children'
  | 'option___menu_item___internal___content'
  | 'option___menu_item___internal___contentDigest'
  | 'option___menu_item___internal___description'
  | 'option___menu_item___internal___fieldOwners'
  | 'option___menu_item___internal___ignoreType'
  | 'option___menu_item___internal___mediaType'
  | 'option___menu_item___internal___owner'
  | 'option___menu_item___internal___type'
  | 'option___menu_item___title'
  | 'option___menu_item___price'
  | 'option___menu_item___temperature'
  | 'option___menu_item___image___id'
  | 'option___menu_item___image___children'
  | 'option___menu_item___image___contentful_id'
  | 'option___menu_item___image___title'
  | 'option___menu_item___image___description'
  | 'option___menu_item___image___node_locale'
  | 'option___menu_item___options'
  | 'option___menu_item___options___id'
  | 'option___menu_item___options___children'
  | 'option___menu_item___options___title'
  | 'option___menu_item___options___minimum'
  | 'option___menu_item___options___pricedOptionItems'
  | 'option___menu_item___options___menu_item'
  | 'option___menu_item___options___spaceId'
  | 'option___menu_item___options___contentful_id'
  | 'option___menu_item___options___createdAt'
  | 'option___menu_item___options___updatedAt'
  | 'option___menu_item___options___node_locale'
  | 'option___menu_item___options___maximum'
  | 'option___menu_item___category'
  | 'option___menu_item___category___id'
  | 'option___menu_item___category___children'
  | 'option___menu_item___category___title'
  | 'option___menu_item___category___menuItems'
  | 'option___menu_item___category___menu_version'
  | 'option___menu_item___category___spaceId'
  | 'option___menu_item___category___contentful_id'
  | 'option___menu_item___category___createdAt'
  | 'option___menu_item___category___updatedAt'
  | 'option___menu_item___category___node_locale'
  | 'option___menu_item___spaceId'
  | 'option___menu_item___contentful_id'
  | 'option___menu_item___createdAt'
  | 'option___menu_item___updatedAt'
  | 'option___menu_item___sys___revision'
  | 'option___menu_item___node_locale'
  | 'option___menu_item___description___id'
  | 'option___menu_item___description___children'
  | 'option___menu_item___description___description'
  | 'option___menu_item___submitImageToUber'
  | 'option___menu_item___option'
  | 'option___menu_item___option___id'
  | 'option___menu_item___option___children'
  | 'option___menu_item___option___title'
  | 'option___menu_item___option___minimum'
  | 'option___menu_item___option___pricedOptionItems'
  | 'option___menu_item___option___menu_item'
  | 'option___menu_item___option___spaceId'
  | 'option___menu_item___option___contentful_id'
  | 'option___menu_item___option___createdAt'
  | 'option___menu_item___option___updatedAt'
  | 'option___menu_item___option___node_locale'
  | 'option___menu_item___option___maximum'
  | 'option___menu_item___childContentfulMenuItemDescriptionTextNode___id'
  | 'option___menu_item___childContentfulMenuItemDescriptionTextNode___children'
  | 'option___menu_item___childContentfulMenuItemDescriptionTextNode___description'
  | 'option___spaceId'
  | 'option___contentful_id'
  | 'option___createdAt'
  | 'option___updatedAt'
  | 'option___sys___revision'
  | 'option___node_locale'
  | 'option___maximum'
  | 'spaceId'
  | 'contentful_id'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'sys___contentType___sys___contentful_id'
  | 'node_locale';

export type ContentfulOptionItemFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  price?: Maybe<FloatQueryOperatorInput>;
  temperature?: Maybe<StringQueryOperatorInput>;
  option?: Maybe<ContentfulOptionFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulOptionItemSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulOptionItemFilterListInput = {
  elemMatch?: Maybe<ContentfulOptionItemFilterInput>;
};

export type ContentfulOptionItemGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulOptionItemEdge>;
  nodes: Array<ContentfulOptionItem>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulOptionItemSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulOptionItemFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulOptionItemSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulOptionItemSysContentType>;
};

export type ContentfulOptionItemSysContentType = {
  sys?: Maybe<ContentfulOptionItemSysContentTypeSys>;
};

export type ContentfulOptionItemSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulOptionItemSysContentTypeSysFilterInput>;
};

export type ContentfulOptionItemSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulOptionItemSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulOptionItemSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulOptionItemSysContentTypeFilterInput>;
};

export type ContentfulOptionSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulOptionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulOptionSys = {
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulOptionSysContentType>;
};

export type ContentfulOptionSysContentType = {
  sys?: Maybe<ContentfulOptionSysContentTypeSys>;
};

export type ContentfulOptionSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulOptionSysContentTypeSysFilterInput>;
};

export type ContentfulOptionSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  contentful_id?: Maybe<Scalars['String']>;
};

export type ContentfulOptionSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulOptionSysFilterInput = {
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulOptionSysContentTypeFilterInput>;
};

export type ContentfulResize = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type ContentfulResizeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type ContentfulResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___resolutions___base64'
  | 'childImageSharp___resolutions___tracedSVG'
  | 'childImageSharp___resolutions___aspectRatio'
  | 'childImageSharp___resolutions___width'
  | 'childImageSharp___resolutions___height'
  | 'childImageSharp___resolutions___src'
  | 'childImageSharp___resolutions___srcSet'
  | 'childImageSharp___resolutions___srcWebp'
  | 'childImageSharp___resolutions___srcSetWebp'
  | 'childImageSharp___resolutions___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___sizes___base64'
  | 'childImageSharp___sizes___tracedSVG'
  | 'childImageSharp___sizes___aspectRatio'
  | 'childImageSharp___sizes___src'
  | 'childImageSharp___sizes___srcSet'
  | 'childImageSharp___sizes___srcWebp'
  | 'childImageSharp___sizes___srcSetWebp'
  | 'childImageSharp___sizes___sizes'
  | 'childImageSharp___sizes___originalImg'
  | 'childImageSharp___sizes___originalName'
  | 'childImageSharp___sizes___presentationWidth'
  | 'childImageSharp___sizes___presentationHeight'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ImageCropFocus = 
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type ImageFit = 
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageFormat = 
  | 'NO_CHANGE'
  | 'JPG'
  | 'PNG'
  | 'WEBP';

export type ImageResizingBehavior = 
  | 'NO_CHANGE'
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  | 'PAD'
  /** Crop a part of the original image to match the specified size. */
  | 'CROP'
  /**
   * Crop the image to the specified dimensions, if the original image is smaller
   * than these dimensions, then the image will be upscaled.
   */
  | 'FILL'
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  | 'THUMB'
  /** Scale the image regardless of the original aspect ratio. */
  | 'SCALE';

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum = 
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'resolutions___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'sizes___originalImg'
  | 'sizes___originalName'
  | 'sizes___presentationWidth'
  | 'sizes___presentationHeight'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type PotraceTurnPolicy = 
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  contentfulAsset?: Maybe<ContentfulAsset>;
  allContentfulAsset: ContentfulAssetConnection;
  contentfulOptionItem?: Maybe<ContentfulOptionItem>;
  allContentfulOptionItem: ContentfulOptionItemConnection;
  contentfulOption?: Maybe<ContentfulOption>;
  allContentfulOption: ContentfulOptionConnection;
  contentfulMenuVersion?: Maybe<ContentfulMenuVersion>;
  allContentfulMenuVersion: ContentfulMenuVersionConnection;
  contentfulMenuItemDescriptionTextNode?: Maybe<ContentfulMenuItemDescriptionTextNode>;
  allContentfulMenuItemDescriptionTextNode: ContentfulMenuItemDescriptionTextNodeConnection;
  contentfulMenuItem?: Maybe<ContentfulMenuItem>;
  allContentfulMenuItem: ContentfulMenuItemConnection;
  contentfulCategory?: Maybe<ContentfulCategory>;
  allContentfulCategory: ContentfulCategoryConnection;
  contentfulContentType?: Maybe<ContentfulContentType>;
  allContentfulContentType: ContentfulContentTypeConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAssetArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
};


export type QueryAllContentfulAssetArgs = {
  filter?: Maybe<ContentfulAssetFilterInput>;
  sort?: Maybe<ContentfulAssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulOptionItemArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  price?: Maybe<FloatQueryOperatorInput>;
  temperature?: Maybe<StringQueryOperatorInput>;
  option?: Maybe<ContentfulOptionFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulOptionItemSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulOptionItemArgs = {
  filter?: Maybe<ContentfulOptionItemFilterInput>;
  sort?: Maybe<ContentfulOptionItemSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulOptionArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  minimum?: Maybe<IntQueryOperatorInput>;
  pricedOptionItems?: Maybe<ContentfulOptionItemFilterListInput>;
  menu_item?: Maybe<ContentfulMenuItemFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulOptionSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  maximum?: Maybe<IntQueryOperatorInput>;
};


export type QueryAllContentfulOptionArgs = {
  filter?: Maybe<ContentfulOptionFilterInput>;
  sort?: Maybe<ContentfulOptionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulMenuVersionArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  type?: Maybe<StringQueryOperatorInput>;
  categories?: Maybe<ContentfulCategoryFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulMenuVersionSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulMenuVersionArgs = {
  filter?: Maybe<ContentfulMenuVersionFilterInput>;
  sort?: Maybe<ContentfulMenuVersionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulMenuItemDescriptionTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulMenuItemDescriptionTextNodeArgs = {
  filter?: Maybe<ContentfulMenuItemDescriptionTextNodeFilterInput>;
  sort?: Maybe<ContentfulMenuItemDescriptionTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulMenuItemArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  price?: Maybe<FloatQueryOperatorInput>;
  temperature?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFilterInput>;
  options?: Maybe<ContentfulOptionFilterListInput>;
  category?: Maybe<ContentfulCategoryFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulMenuItemSysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<ContentfulMenuItemDescriptionTextNodeFilterInput>;
  submitImageToUber?: Maybe<BooleanQueryOperatorInput>;
  option?: Maybe<ContentfulOptionFilterListInput>;
  childContentfulMenuItemDescriptionTextNode?: Maybe<ContentfulMenuItemDescriptionTextNodeFilterInput>;
};


export type QueryAllContentfulMenuItemArgs = {
  filter?: Maybe<ContentfulMenuItemFilterInput>;
  sort?: Maybe<ContentfulMenuItemSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulCategoryArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  menuItems?: Maybe<ContentfulMenuItemFilterListInput>;
  menu_version?: Maybe<ContentfulMenuVersionFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  contentful_id?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulCategorySysFilterInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulCategoryArgs = {
  filter?: Maybe<ContentfulCategoryFilterInput>;
  sort?: Maybe<ContentfulCategorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulContentTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulContentTypeArgs = {
  filter?: Maybe<ContentfulContentTypeFilterInput>;
  sort?: Maybe<ContentfulContentTypeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum = 
  | 'buildTime'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum = 
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___trackingId'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___short_name'
  | 'pluginCreator___pluginOptions___description'
  | 'pluginCreator___pluginOptions___start_url'
  | 'pluginCreator___pluginOptions___display'
  | 'pluginCreator___pluginOptions___background_color'
  | 'pluginCreator___pluginOptions___theme_color'
  | 'pluginCreator___pluginOptions___icon'
  | 'pluginCreator___pluginOptions___cache_busting_mode'
  | 'pluginCreator___pluginOptions___include_favicon'
  | 'pluginCreator___pluginOptions___legacy'
  | 'pluginCreator___pluginOptions___theme_color_in_head'
  | 'pluginCreator___pluginOptions___cacheDigest'
  | 'pluginCreator___pluginOptions___fonts'
  | 'pluginCreator___pluginOptions___spaceId'
  | 'pluginCreator___pluginOptions___accessToken'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___documentPaths'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___author'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___trackingId'
  | 'pluginOptions___name'
  | 'pluginOptions___short_name'
  | 'pluginOptions___description'
  | 'pluginOptions___start_url'
  | 'pluginOptions___display'
  | 'pluginOptions___background_color'
  | 'pluginOptions___theme_color'
  | 'pluginOptions___icon'
  | 'pluginOptions___cache_busting_mode'
  | 'pluginOptions___include_favicon'
  | 'pluginOptions___legacy'
  | 'pluginOptions___theme_color_in_head'
  | 'pluginOptions___cacheDigest'
  | 'pluginOptions___fonts'
  | 'pluginOptions___spaceId'
  | 'pluginOptions___accessToken'
  | 'pluginOptions___path'
  | 'pluginOptions___documentPaths'
  | 'pluginOptions___pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___author'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  trackingId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cacheDigest?: Maybe<Scalars['String']>;
  fonts?: Maybe<Array<Maybe<Scalars['String']>>>;
  spaceId?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  documentPaths?: Maybe<Array<Maybe<Scalars['String']>>>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  trackingId?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  fonts?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  accessToken?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  documentPaths?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum = 
  | 'ASC'
  | 'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type MenuItemsAndPricesQueryVariables = {};


export type MenuItemsAndPricesQuery = { allContentfulMenuVersion: { edges: Array<{ node: (
        Pick<ContentfulMenuVersion, 'type'>
        & { categories?: Maybe<Array<Maybe<(
          Pick<ContentfulCategory, 'title'>
          & { menuItems?: Maybe<Array<Maybe<Pick<ContentfulMenuItem, 'title' | 'price'>>>> }
        )>>> }
      ) }> } };

export type MenuPreviewPanelsQueryVariables = {};


export type MenuPreviewPanelsQuery = { allContentfulMenuVersion: { edges: Array<{ node: (
        Pick<ContentfulMenuVersion, 'type'>
        & { categories?: Maybe<Array<Maybe<(
          Pick<ContentfulCategory, 'title'>
          & { menuItems?: Maybe<Array<Maybe<Pick<ContentfulMenuItem, 'title' | 'price'>>>> }
        )>>> }
      ) }> } };

export type OnlineOrderingQueryVariables = {};


export type OnlineOrderingQuery = { allContentfulMenuVersion: { edges: Array<{ node: (
        Pick<ContentfulMenuVersion, 'type'>
        & { categories?: Maybe<Array<Maybe<(
          Pick<ContentfulCategory, 'title'>
          & { menuItems?: Maybe<Array<Maybe<(
            Pick<ContentfulMenuItem, 'title' | 'price'>
            & { description?: Maybe<Pick<ContentfulMenuItemDescriptionTextNode, 'description'>>, image?: Maybe<{ fluid?: Maybe<Pick<ContentfulFluid, 'src'>> }>, options?: Maybe<Array<Maybe<(
              Pick<ContentfulOption, 'title' | 'maximum' | 'minimum'>
              & { freeOptionItem?: Maybe<Array<Maybe<Pick<ContentfulMenuItem, 'id' | 'title' | 'price'> | Pick<ContentfulOptionItem, 'id' | 'title' | 'price'>>>>, pricedOptionItems?: Maybe<Array<Maybe<Pick<ContentfulOptionItem, 'title' | 'price'>>>> }
            )>>> }
          )>>> }
        )>>> }
      ) }> } };

export type MenuVersionDataQueryVariables = {};


export type MenuVersionDataQuery = { allContentfulMenuVersion: { edges: Array<{ node: Pick<ContentfulMenuVersion, 'type'> }> } };
