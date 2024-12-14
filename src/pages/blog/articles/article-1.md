---
layout: ../../../layouts/MarkdownArticleLayout.astro

title: 'PocketBase'
pubDate: 2022-07-01
abstract: 'quick overview of a ready-to-use backend for your frontend projects'
author: 'Astro Learner'
tags: ["BaaS", "Tech", "Backend"]
insight: 3
---


So you need to make a frontend, and don't have the time to make a backend application?
Pocketbase is a free and open source frontend-agnostic backend written in Go. You can set it up in minutes, and focus on your frontend.
Here's how to set it up, use it, and when you should or shouldn't use PocketBase and similar Backend-as-a-Service products.
Go read the technical documentation if you need more information. It's concise, clear and simple, which is a big plus!
Installing PocketBase
PocketBase is extremely easy to install.
Start by visiting https://pocketbase.io/docs/
PocketBase is installed as a single package. Simply choose the right package for you CPU architecture and OS.
PocketBase download section. Link to GitHub Releases page.I run Linux on x64 (Intel or AMD CPUs), so i'll pick that.
Unzip the package where you want your database and backend configuration to live. Depending on the context, I'd advise against placing these sensitive files in your frontend project directory if you don't have to, but it's up to you.
And that's it! PocketBase is provided as the executable pocketbase binary.
Let's get started using PocketBase! I'm making a simple blog app frontend in TypeScript with Angular, so I'll use the JavaScript SDK.
Using PocketBase
PocketBase offers multiple officials SDKs (Software Development Kits) for interacting with the API. As of now, there is one for Dart, and another for JS / TypeScript.
Of course, you don't have to use an SDK to interact with your backend API, but it's the easiest way.
Let's start by running the backend:
$ cd bakend
$ ./pocketbase serve
2024/10/12 18:02:32 Server started at http://127.0.0.1:8090
├─ REST API: http://127.0.0.1:8090/api/
└─ Admin UI: http://127.0.0.1:8090/_/
Create your admin account by visiting the Admin UI URL. There, you can create databases and configure your backend through the UI.
The database and configurations are saved as files where your pocketbase lives.
PocketBase's API is a standard REST API. Take a look at the docs for more information about the API and using the pocketbase executable.
The JavaScript SDK library is very easy to handle, and example code is provided.
Here is how you would call the backend API to authenticate as a user in JS:
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://pocketbase.io');

...

const authData = await pb.collection('users').authWithPassword('YOUR_USERNAME_OR_EMAIL', '1234567890');

// after the above you can also access the auth data from the authStore
console.log(pb.authStore.isValid);
console.log(pb.authStore.token);
console.log(pb.authStore.model.id);

// "logout" the last authenticated model
pb.authStore.clear();
Its simplicity makes PocketBase an excellent solution for basic needs, as well as a good introduction to using BaaS software.
PocketBase handles relational databases, file uploads, authentication, and more; everything can be easily configured through the UI, from which the docs are accessible too.
Don't forget to properly configure API rules when creating collections through the Admin UI!
When should you use PocketBase?
A BaaS (Backend-as-a-Service) application makes choices for you. If you need more control over your backend, don't use a BaaS.
Now, from a security standpoint, you should only use PocketBase if you don't need to have complete control over your app's security or understand it internally.
I used PocketBase to deliver a working frontend in Angular with TypeScript, a graded project and part of my training. Thanks to this software, I was able to focus on frontend development.
If you want to make a secure, production ready application, you should put your security skills to use. It has happened before that misconfigured BaaS applications have endangered deployed applications.
You should ensure that both the products you use (e.g. a ready-to-use backend) and the ones you make (e.g. a frontend application) are secure. Follow best practices.