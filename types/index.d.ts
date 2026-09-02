import type { ReactNode, FC } from 'react';

export interface IToolbarItem {
  id?: string | number;
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

export declare const Toolbar: FC<{
  items?: IToolbarItem[];
  menuCss?: string;
  css?: string;
  values?: { [key: string]: any };
  overflow?: 'collapse' | 'wrap' | 'menu';
  onClick?: (ev: { item: IToolbarItem }) => void;
  onChange?: (ev: { value: any; item: IToolbarItem }) => void;
}>;

export declare const ButtonList: FC<{
  options?: { id: string | number; label: string }[];
  value?: string | number;
  css?: string;
  disabled?: boolean;
  onChange?: (ev: { value: string | number }) => void;
}>;

export declare function registerToolbarItem(
  type: string,
  handler: FC<any>,
  config?: { menu?: boolean },
): void;
