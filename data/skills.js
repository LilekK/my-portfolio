// Central place to edit your skills without touching JSX
window.skills = {
  frameworks: [
    'Knit',
    'ProfileService',
    'Fusion (UI)',
    'Rojo + VS Code',
    'StyLua',
    'Selene',
    'GitHub'
  ],

// Showcases with optional short clips
  examples: [
    {
      title: 'Draggable Inventory',
      pill: 'Complete System',                     // optional: 'Built from scratch' | 'Worked on'
      summary: 'Inventory system with advanced drag-and-drop functionality. Made with Fusion',
      video: './videos/Inventory.mp4',            // put files in public/videos/
      poster: './images/firework_thumbnail.jpg'
    },
    {
      title: 'RNG Crates / Loot',
      pill: 'Complete System',
      summary: 'Weighted rarity tables with pity system and FX.',
      video: './videos/Crates.mp4'
    },
    {
      title: 'Building (Placeable) System',
      pill: 'Complete System',
      summary: 'Allows players to place and customize objects in their base. Objects also saves',
      video: './videos/Buildingsys.mp4'
    },
    {
      title: 'Advanced NPC Spawning & Rendering System (based on weather, season, time)',
      pill: 'Complete System',
      summary: 'Easily configurable via folder structure. This system also allows rendering NPCs for clients based on player proximity',
      video: './videos/Spawner.mp4'
    },
    {
      title: 'NPC Dialog System',
      pill: 'Complete System',
      summary: 'Easily configurable via folder structure. Supports hooking different actions, like accept quest, open UI',
      video: './videos/Dialog.mp4'
    },
    {
      title: 'Interface Controller',
      pill: 'Frontend',
      summary: 'Custom framework that allows communication between all UI elements in game -> no more overlapping UI, configurable effects',
      video: './videos/Interface.mp4'
    },
    {
      title: 'Fisch-like Catch gameplay loop',
      pill: 'Complete System',
      summary: 'Catch butterfly -> win the mini-game -> Add to the inventory',
      video: './videos/CatchLoop.mp4'
    },
    {
      title: 'Pet(drone) System',
      pill: 'Complete System',
      summary: 'Simple pet system where pets/drones follow or helping the player',
      video: './videos/DroneSys.mp4'
    },
    {
      title: 'Classic Simulator/Tycoon Shop',
      pill: 'Complete System',
      summary: '',
      video: './videos/ShopSys.mp4'
    },
    {
      title: 'Live minimap/map',
      pill: 'Frontend',
      summary: '',
      video: './videos/Map.mp4'
    },
    {
      title: 'Hoverboard feature',
      pill: 'Complete System',
      summary: '',
      video: './videos/Hoverboard.mp4'
    },
    {
      title: 'Quest System (using RoQuest library)',
      pill: 'Complete System',
      summary: 'Easily configurable via folder structure.',
      video: './videos/Quests.mp4'
    },
  ],

  // Breadth, no demos
  workedOn: [
    'Data Saving via ProfileService',
    'Matchmaking / team split',
    'Day/Night cycle',
    'Weather system',
    'Seasons system',
    'Combat system',
    'Simple NPC pathfinding',
    'Monetization Features (starter pack, dev products)',
    'Daily Rewards',
    'Global Leaderboards',
    'Boat System',
    'Helicopter System',
    'Flying-Broom System',
    'Crafting'
  ],

  other: ['3D Modeling', 'Rigging', 'Basic Animation', 'Level Design', 'Game Design', 'VFX-Animation sync'],
};