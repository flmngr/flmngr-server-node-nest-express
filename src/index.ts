/**
 *
 * Flmngr server package for Node (Nest on Express platform).
 *
 * This file is a part of the server side implementation of Flmngr -
 * the JavaScript/TypeScript file manager widely used for building apps and editors.
 *
 * Comes as a standalone package for custom integrations,
 * and as a part of N1ED web content builder.
 *
 * Flmngr file manager:       https://flmngr.com
 * N1ED web content builder:  https://n1ed.com
 * Developer website:         https://edsdk.com
 *
 * License: GNU General Public License Version 3 or later
 *
 **/

import {bindFlmngr as bindFlmngrExpress} from "@flmngr/flmngr-server-node-express";
import {FlmngrNestConfig} from "./FlmngrNestConfig";

export function bindFlmngr(config: FlmngrNestConfig): void {

    bindFlmngrExpress({
        ...config,
        app: config.app.getHttpAdapter().getInstance(),
        overrideFramework: "node-nest-express"
    });

}