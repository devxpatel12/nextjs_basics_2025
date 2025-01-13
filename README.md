## Lecture-01 
- File Based Routing
- Link (href={{pathname:"/performance", query:{name:"test"}}}, scroll, prefetch, replace)
- Layout
- Adding Image Files
  - Note: If you're using above Next.js 14.2 or higher version you have to edit
    ```Solution #1 (Latest Versions of Next.js)
    Update your tsconfig.json's path field to look like this:

    "paths": {
      "@/*": ["./src/*"],
      "public/*": ["./public/*"]
    }
    Make sure to fully restart your server before testing again.

    Solution #2

    Add a / character in front of public anytime you need to import a static image:

    import homeImg from '/public/home.jpg';
    ```
    - All static files keep it inside public folder
    - Image component is a optimize version