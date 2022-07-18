import { Config as RegistryConfig } from "../../utils/registry";

export type Config = {
  version: string;
  storageDir: string;
  port: number;
  localPathname: string;
  packages: Record<PackageName, PackageMeta>;
  npmrcs: Record<Hash, Base64>;
  registries: Record<RegistryKey, RegistryConfig>;
};

export type PackageName = string;
export type PackageMeta = {
  dir: string;
  version: string;
  npmrc: Hash;
  registry: Hash;
};

export type RegistryKey = string;
export type Hash = string;
export type Base64 = string;
