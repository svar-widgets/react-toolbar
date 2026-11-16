import type { FC } from 'react';

export type TID = string | number;

export interface IToolbarItem {
  id?: TID;
  comp?: string | FC<any>;
  icon?: string;
  css?: string;
  type?: string;
  title?: string;
  text?: string;
  tooltip?: string;
  menuText?: string;
  key?: string;
  disabled?: boolean;
  spacer?: boolean;
  collapsed?: boolean;
  handler?: (item: IToolbarItem, value?: any) => void;
  layout?: 'column';
  items?: IToolbarItem[];
  pinned?: boolean;
  [key: string]: any;
}

export type TToolbarValues = { [key: string]: any };

export interface IToolbarClickEvent {
  item: IToolbarItem;
}

export interface IToolbarChangeEvent {
  value: any;
  item: IToolbarItem;
}

export interface IButtonListOption {
  id: TID;
  label: string;
}

export interface IItemConfig {
  menu?: boolean;
}

export declare const Toolbar: FC<{
  items?: IToolbarItem[];
  menuCss?: string;
  css?: string;
  values?: TToolbarValues | null;
  overflow?: 'collapse' | 'wrap' | 'menu';
  layout?: 'row' | 'column';
  onClick?: (ev: IToolbarClickEvent) => void;
  onChange?: (ev: IToolbarChangeEvent) => void;
}>;

export declare const ButtonList: FC<{
  options?: IButtonListOption[];
  value?: TID;
  css?: string;
  disabled?: boolean;
  onChange?: (ev: { value: TID }) => void;
}>;

export declare function registerToolbarItem(
  type: string,
  handler: FC<any>,
  config?: IItemConfig | null,
): void;
