/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  const singleRequire = name => {
    if (name !== 'require') {
      name = name + '.js';
    }
    let promise = Promise.resolve();
    if (!registry[name]) {
      
        promise = new Promise(async resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = name;
            document.head.appendChild(script);
            script.onload = resolve;
          } else {
            importScripts(name);
            resolve();
          }
        });
      
    }
    return promise.then(() => {
      if (!registry[name]) {
        throw new Error(`Module ${name} didn’t register its module`);
      }
      return registry[name];
    });
  };

  const require = (names, resolve) => {
    Promise.all(names.map(singleRequire))
      .then(modules => resolve(modules.length === 1 ? modules[0] : modules));
  };
  
  const registry = {
    require: Promise.resolve(require)
  };

  self.define = (moduleName, depsNames, factory) => {
    if (registry[moduleName]) {
      // Module is already loading or loaded.
      return;
    }
    registry[moduleName] = Promise.resolve().then(() => {
      let exports = {};
      const module = {
        uri: location.origin + moduleName.slice(1)
      };
      return Promise.all(
        depsNames.map(depName => {
          switch(depName) {
            case "exports":
              return exports;
            case "module":
              return module;
            default:
              return singleRequire(depName);
          }
        })
      ).then(deps => {
        const facValue = factory(...deps);
        if(!exports.default) {
          exports.default = facValue;
        }
        return exports;
      });
    });
  };
}
define("./service-worker.js",['./workbox-89aac2ca'], function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "/index.html",
    "revision": "030f01bd442210b30bd89d5b5bcfa16f"
  }, {
    "url": "/src_pages_Favs_js.app.bundle.js",
    "revision": "2b9a58b758af6d263c8aff57df2434ba"
  }, {
    "url": "/src_pages_Home_js.app.bundle.js",
    "revision": "45f1c1d4c84c5f5177e2581820d406ac"
  }, {
    "url": "/src_pages_User_js.app.bundle.js",
    "revision": "c6fd83b90f0969ea39d16258803ac994"
  }, {
    "url": "/vendors-node_modules_apollo_react-hoc_lib_react-hoc_esm_js.app.bundle.js",
    "revision": "bbbb721efaccdf82173a21ca7aebc3fc"
  }, {
    "url": "/vendors-node_modules_intersection-observer_intersection-observer_js.app.bundle.js",
    "revision": "00c146985b0ae9a867e24b8988fec7c0"
  }, {
    "url": "/vendors-node_modules_react-helmet_es_Helmet_js.app.bundle.js",
    "revision": "d194ae1993f1bccf4d9e34e82bca994e"
  }], {});
  workbox.registerRoute(/https:\/\/res.cloudinary.com|images.unsplash.com/, new workbox.CacheFirst({
    "cacheName": "images",
    plugins: []
  }), 'GET');
  workbox.registerRoute(/https:\/\/api-petgram-nu.vercel.app/, new workbox.NetworkFirst({
    "cacheName": "api",
    plugins: []
  }), 'GET');

});
