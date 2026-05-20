import { serviceDemo } from '@Demo/serviceDemo';
import { Container } from 'inversify';

export const serviceContainer = new Container();

serviceContainer.load(serviceDemo);
