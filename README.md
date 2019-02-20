# Live Video Streaming

Allow users to create and show live streams.

### Concepts Learned

- React Router
- Router Types in Traditional Servers
- Handling Authentication
- Redux Dev Tools
- Redux Form
- JSON Server

## App Overview

<p float="left">
  <img src="mockup_images/index_page_guest.jpg" width="420" hspace="10" />
  <img src="mockup_images/index_page_user.jpg" width="420" />
</p>
<p float="left">
  <img src="mockup_images/show_stream.png" width="420" hspace="10" />
  <img src="mockup_images/create_stream.png" width="420" />
</p>
<p float="left">
  <img src="mockup_images/edit_stream.png" width="420" hspace="10" />
  <img src="mockup_images/delete_stream.png" width="420" />
</p>

## Project Setup

1. Create a new project and generate OAuth credentials from [here](https://console.developers.google.com).
2. Obtain the Client ID.
3. Rename the file _.env-sample_ inside the _client/_ directory to _.env_ and place your Client ID there.

## App Flow

High-level view:
![App Flow v1](mockup_images/app_flow_v1.png)

Detailed view:
![App Flow v2](mockup_images/app_flow_v2.png)

## Component Hierarchy

![Component Hierarchy](mockup_images/component_hierarchy.png)

## Streams RESTful API Conventions

![REST API](mockup_images/rest_api.png)
