import type { Option } from "@/models/option-model";

export const getOptionByType = (options: Option[], type: string) => options.find( option => option.type === type )