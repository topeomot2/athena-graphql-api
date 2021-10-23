import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Attribute = {
  __typename?: 'Attribute';
  category?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Category = Code & {
  __typename?: 'Category';
  attr: Array<Maybe<Attribute>>;
  dimension?: Maybe<Scalars['String']>;
  display: Scalars['String'];
  display_sequence: Scalars['Int'];
  label: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type Code = {
  attr: Array<Maybe<Attribute>>;
  dimension?: Maybe<Scalars['String']>;
  display: Scalars['String'];
  display_sequence: Scalars['Int'];
  label: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type Country = Code & {
  __typename?: 'Country';
  attr: Array<Maybe<Attribute>>;
  dimension?: Maybe<Scalars['String']>;
  display: Scalars['String'];
  display_sequence: Scalars['Int'];
  label: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type Dimension = {
  __typename?: 'Dimension';
  display?: Maybe<Scalars['String']>;
  isMeasure?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
};

export type Indicator = Code & {
  __typename?: 'Indicator';
  attr: Array<Maybe<Attribute>>;
  dimension?: Maybe<Scalars['String']>;
  display: Scalars['String'];
  display_sequence: Scalars['Int'];
  label: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  countries?: Maybe<Array<Country>>;
  indicators?: Maybe<Array<Indicator>>;
};


export type QueryCountriesArgs = {
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};


export type QueryIndicatorsArgs = {
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Attribute: ResolverTypeWrapper<Attribute>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Category: ResolverTypeWrapper<Category>;
  Code: ResolversTypes['Category'] | ResolversTypes['Country'] | ResolversTypes['Indicator'];
  Country: ResolverTypeWrapper<Country>;
  Dimension: ResolverTypeWrapper<Dimension>;
  Indicator: ResolverTypeWrapper<Indicator>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Attribute: Attribute;
  Boolean: Scalars['Boolean'];
  Category: Category;
  Code: ResolversParentTypes['Category'] | ResolversParentTypes['Country'] | ResolversParentTypes['Indicator'];
  Country: Country;
  Dimension: Dimension;
  Indicator: Indicator;
  Int: Scalars['Int'];
  Query: {};
  String: Scalars['String'];
};

export type AttributeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Attribute'] = ResolversParentTypes['Attribute']> = {
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = {
  attr?: Resolver<Array<Maybe<ResolversTypes['Attribute']>>, ParentType, ContextType>;
  dimension?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  display?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  display_sequence?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Code'] = ResolversParentTypes['Code']> = {
  __resolveType: TypeResolveFn<'Category' | 'Country' | 'Indicator', ParentType, ContextType>;
  attr?: Resolver<Array<Maybe<ResolversTypes['Attribute']>>, ParentType, ContextType>;
  dimension?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  display?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  display_sequence?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type CountryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Country'] = ResolversParentTypes['Country']> = {
  attr?: Resolver<Array<Maybe<ResolversTypes['Attribute']>>, ParentType, ContextType>;
  dimension?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  display?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  display_sequence?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DimensionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Dimension'] = ResolversParentTypes['Dimension']> = {
  display?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isMeasure?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IndicatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Indicator'] = ResolversParentTypes['Indicator']> = {
  attr?: Resolver<Array<Maybe<ResolversTypes['Attribute']>>, ParentType, ContextType>;
  dimension?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  display?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  display_sequence?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  label?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  countries?: Resolver<Maybe<Array<ResolversTypes['Country']>>, ParentType, ContextType, RequireFields<QueryCountriesArgs, 'first' | 'skip'>>;
  indicators?: Resolver<Maybe<Array<ResolversTypes['Indicator']>>, ParentType, ContextType, RequireFields<QueryIndicatorsArgs, 'first' | 'skip'>>;
};

export type Resolvers<ContextType = any> = {
  Attribute?: AttributeResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  Code?: CodeResolvers<ContextType>;
  Country?: CountryResolvers<ContextType>;
  Dimension?: DimensionResolvers<ContextType>;
  Indicator?: IndicatorResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

