[![Flmngr file manager logo](https://flmngr.com/img/favicons/favicon-64x64.png)](https://flmngr.com)

# Flmngr module for NestJS

> Server-side part of the Flmngr file manager for Node Nest server (based on Express server)

[![Flmngr file manager screenshot](https://flmngr.com/img/browsing.jpg)](https://flmngr.com)

[Flmngr file manager](https://flmngr.com) is used to upload and manage files and images. Can be a standalone file manager (React/Angular/etc. or custom JavaScript or TypeScript integrations) or work together with [TinyMCE](https://flmngr.com/doc/install-tinymce-plugin), [CKEditor&nbsp;4](https://flmngr.com/doc/install-ckeditor-plugin), [CKEditor&nbsp;5](https://flmngr.com/doc/install-ckeditor-5-plugin), [N1ED](https://n1ed.com), or any other JS components.

This package is a server-side implementation needed to support requests from the file manager dialog when using Node on the server. It will handle some single URL and let the file manager receive file lists and send file commands to the server.

## Install
Install the [Flmngr NPM package](https://npmjs.com/package/@flmngr/flmngr-server-node-nest-express) using the console command in the project folder:

```
npm require flmngr/flmngr-server-node-nest-express
```

Then follow the [integration manual](https://flmngr.com/doc/install-file-manager-server-node-nest-express) to enable Flmngr controller in Nest.

## Debugging

In case of any problem, we have a **very** detailed Question-Answer [debug manual](https://flmngr.com/doc/file-manager-debug).

## See Also

- [Flmngr](https://flmngr.com) - Flmngr file manager.
- [Install Flmngr module for Nest](https://flmngr.com/doc/install-file-manager-server-node-nest) - the detailed manual on how to install Node file manager on your Nest server.
- [Nest + Flmngr example](https://github.com/flmngr/flmngr-server-node-nest-express-example-ts)
- [Flmngr codepens](https://codepen.io/flmngr/pens/public) - collection of JS samples on CodePen.
- [Flmngr API](https://flmngr.com/doc/api) - API of Flmngr client.
- [N1ED](https://n1ed.com) - a website content builder with Flmngr file manager aboard, also works as a plugin for CKEditor 4, TinyMCE, which has modules for different CMSs.  


## License

GNU Lesser General Public License v3; see LICENSE.txt