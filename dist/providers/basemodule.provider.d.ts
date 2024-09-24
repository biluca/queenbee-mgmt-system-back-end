import { GenericProvider } from 'src/common/genericProvider.commons';
import { BaseModuleProviderInterface } from 'src/modules/base_module/interface/basemodule.interface';
export declare class BaseModuleProvider extends GenericProvider implements BaseModuleProviderInterface {
    private readonly baseModuleService;
    getSampleFunction(): Promise<any>;
}
