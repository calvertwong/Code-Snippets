# Overview

These scripts enable easy setup, disconnecting and linking to local feature modules. Without these scripts, we would need to repeat similar commands in each feature modules to link to the container module.
These simple yet convenience scripts allow us to start developing with just one simple command.  

    1) link_script.js 
    - Execute npm install in feature modules
    - Link common dependencies with symlinks (React doesn't allow multiple React instances)
    - Show output of the linking status with total time spent in minutes
    
    **To execute, run `npm run link`**

    2) unlink_script.js
    - Remove symlinks that link local modules to the container
    - Remove local modules from the container's package.json
    - Remove local modules created from npm link in global node_modules
    
    **To execute, run `npm run unlink`**
