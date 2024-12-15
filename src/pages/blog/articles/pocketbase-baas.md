---
layout: ../../../layouts/MarkdownArticleLayout.astro

title: 'PocketBase'
pubDate: 2024-10-12
abstract: 'Quick overview of a ready-to-use backend for your frontend projects'
author: 'Théo Tchilinguirian'
tags: ["BaaS", "Backend", "Tutorial"]
insight: 3
---

You can also read this article [on Medium](https://medium.com/@theo.tchlx/pocketbase-a-ready-to-use-backend-for-your-frontend-projects-da6338c89b02).

So you need to make a frontend but don't have the time to develop a backend application? PocketBase might be the solution you're looking for! It's a free and open-source frontend-agnostic backend written in Go. You can set it up in minutes and focus entirely on your frontend.

In this article, we'll cover:

- How to set up PocketBase
- How to use it
- When you should (and shouldn't) use PocketBase and similar Backend-as-a-Service products

For more details, check out the [official PocketBase documentation](https://pocketbase.io/docs/). It's concise, clear, and simple - a big plus for this product!

---

### Installing PocketBase

PocketBase is extremely easy to install. Here’s how:

1. Start by visiting the [PocketBase documentation](https://pocketbase.io/docs/).
2. Download the appropriate package for your CPU architecture and operating system. Visit the [GitHub Releases page](https://github.com/pocketbase/pocketbase/releases) to find the right package for you. For example, if you're running Linux on x64 (Intel or AMD CPUs), select that package.
3. Unzip the package in the location where you want your database and backend configuration to reside. Note: It’s recommended to avoid placing sensitive files in your frontend project directory if you can help it.
4. That’s it! PocketBase is provided as a single executable file named `pocketbase`.

---

### Getting Started with PocketBase

Let’s get started using PocketBase! For this example, we’ll make a simple blog app frontend in TypeScript with Angular and use the JavaScript SDK.

#### Running the Backend

Run the PocketBase server using the following commands. You should see this:

```bash
$ cd backend
$ ./pocketbase serve

2024/10/12 18:02:32 Server started at http://127.0.0.1:8090
├─ REST API: http://127.0.0.1:8090/api/
└─ Admin UI: http://127.0.0.1:8090/_/
```

Visit the Admin UI URL at `http://127.0.0.1:8090/_/` to create your admin account. Through this UI, you can:

- Create databases
- Configure your backend
- Access PocketBase documentation

All database files and configurations are stored in the same directory as your `pocketbase` executable.

#### Using the JavaScript SDK

PocketBase offers official SDKs for Dart and JavaScript/TypeScript. While you can interact with the API without an SDK, using one simplifies the process. Here's an example of how to authenticate a user using the JavaScript SDK:

```javascript
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://pocketbase.io');

...

const authData = await pb.collection('users').authWithPassword('YOUR_USERNAME_OR_EMAIL', '1234567890');

// After authenticating, you can access the auth data from the authStore
console.log(pb.authStore.isValid);
console.log(pb.authStore.token);
console.log(pb.authStore.model.id);

// "Logout" the last authenticated model
pb.authStore.clear();
```

PocketBase’s API is a standard REST API. For more information, refer to the [official API documentation](https://pocketbase.io/docs/).

#### Features

PocketBase handles:

- Relational databases
- File uploads
- Authentication
- API rules (configure them through the Admin UI!)

Everything is easy to configure through the UI, and you can access documentation directly within it.

---

### When Should You Use PocketBase?

PocketBase (and similar Backend-as-a-Service solutions) is excellent for basic needs and prototyping. However, it’s not always the best choice. Here are some considerations:

#### When to Use PocketBase

- **Rapid Prototyping:** When you need a working backend quickly to focus on frontend development.
- **Small-Scale Applications:** Ideal for simple apps that don’t require extensive backend customization.
- **Learning Tool:** A great introduction to using BaaS products.

#### When Not to Use PocketBase

- **Security Concerns:** If you need complete control over your app’s security or want to understand the backend internally, a BaaS might not be the best choice.
- **Production-Ready Applications:** Misconfigured BaaS applications can be a security risk. Ensure that both the products you use (e.g., PocketBase) and the ones you build (e.g., your frontend) follow best practices.

---

### Conclusion

I used PocketBase for a graded project during my training, where I created a working frontend in Angular with TypeScript. Thanks to PocketBase, I was able to focus entirely on frontend development without worrying about backend complexities.

That said, remember to configure your backend properly, especially the API rules. For production-ready apps, put your security skills to use and carefully evaluate whether a BaaS is suitable for your project.

PocketBase’s simplicity and features make it an excellent choice for quick and easy backend development. For more details, visit the [official documentation](https://pocketbase.io/docs/).
