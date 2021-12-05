#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { ServerlessNextjsCdkExampleStack } from '../lib/serverless-nextjs-cdk-example';

const app = new cdk.App();
new ServerlessNextjsCdkExampleStack(app, 'ServerlessNextjsCdkExample');
