import { GenericProcessor } from 'src/common/genericProcessor.commons';
import { BaseModuleProviderInterface } from '../interface/basemodule.interface';
export declare class BaseModuleProcessor extends GenericProcessor {
    private readonly baseModuleProvider;
    constructor(baseModuleProvider: BaseModuleProviderInterface);
    getSampleFunction(): Promise<any>;
}
