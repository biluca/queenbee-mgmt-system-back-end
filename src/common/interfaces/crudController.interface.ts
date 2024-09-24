import { Request, Response } from 'express';

export interface CRUDController {
  create(object: any, req: Request, res: Response): Promise<any>;
  getAll(req: Request, res: Response): Promise<any>;
  getById(uuid: string, req: Request, res: Response): Promise<any>;
  getByFilters(filters: any, req: Request, res: Response): Promise<any>;
  getBySearch(search: any, req: Request, res: Response): Promise<any>;
  updateById(object: any, req: Request, res: Response): Promise<any>;
  deleteById(uuid: string, req: Request, res: Response): Promise<any>;
}
