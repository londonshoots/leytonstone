TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "id": "panorama_D6F5662D_DF15_3EFA_41EA_763184AC13CD",
  "hfovMax": 130,
  "vfov": 180,
  "hfovMin": 60,
  "cardboardMenu": {
   "fontFamily": "Arial",
   "id": "Menu_CC40B2AE_DF73_57F6_41E7_89A3AA4CBD92",
   "selectedBackgroundColor": "#202020",
   "backgroundColor": "#404040",
   "fontColor": "#FFFFFF",
   "rollOverOpacity": 0.8,
   "class": "Menu",
   "label": "Media",
   "children": [
    {
     "class": "MenuItem",
     "label": "R0011012",
     "click": "this.mainPlayList.set('selectedIndex', 0)"
    },
    {
     "class": "MenuItem",
     "label": "R0011013",
     "click": "this.mainPlayList.set('selectedIndex', 1)"
    },
    {
     "class": "MenuItem",
     "label": "R0011014",
     "click": "this.mainPlayList.set('selectedIndex', 2)"
    },
    {
     "class": "MenuItem",
     "label": "R0011015",
     "click": "this.mainPlayList.set('selectedIndex', 3)"
    },
    {
     "class": "MenuItem",
     "label": "R0011016",
     "click": "this.mainPlayList.set('selectedIndex', 4)"
    }
   ],
   "selectedFontColor": "#FFFFFF",
   "rollOverBackgroundColor": "#000000",
   "rollOverFontColor": "#FFFFFF",
   "opacity": 0.4
  },
  "hfov": 360,
  "partial": false,
  "pitch": 0,
  "class": "Panorama",
  "label": "R0011012",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_D6F5662D_DF15_3EFA_41EA_763184AC13CD_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_D6F5662D_DF15_3EFA_41EA_763184AC13CD.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_D6F5662D_DF15_3EFA_41EA_763184AC13CD_t.jpg",
    "overlays": [
     {
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_D6E4762A_DF15_5EFE_4143_74EE403FD1B4, this.camera_CC52A2D2_DF73_57AF_41E9_CA3741831A24); this.mainPlayList.set('selectedIndex', 1)",
        "displayTooltipInTouchScreens": true,
        "mapColor": "image",
        "toolTip": "click to navigate"
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 19.71,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 99,
           "width": 309,
           "url": "media/panorama_D6F5662D_DF15_3EFA_41EA_763184AC13CD_0_HS_2_0.png"
          }
         ]
        },
        "yaw": 135.32,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -18.1
       }
      ],
      "data": {
       "label": "Image"
      },
      "id": "overlay_D01EE958_DF33_355A_41B9_8410851168AF",
      "useHandCursor": true,
      "rollOverDisplay": false
     },
     {
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_D548B654_DF15_DEAA_41D0_FB090628AE08, this.camera_CC4D72C8_DF73_57BA_41DF_2E7A97081032); this.mainPlayList.set('selectedIndex', 4)",
        "displayTooltipInTouchScreens": true,
        "mapColor": "image",
        "toolTip": "click to navigate"
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 19.78,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 136,
           "width": 318,
           "url": "media/panorama_D6F5662D_DF15_3EFA_41EA_763184AC13CD_0_HS_3_0.png"
          }
         ]
        },
        "yaw": 35.41,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -21.81
       }
      ],
      "data": {
       "label": "Image"
      },
      "id": "overlay_CF8454EC_DF32_D37A_41E5_B6CEC2EB09BD",
      "useHandCursor": true,
      "rollOverDisplay": false
     },
     {
      "hfov": 24,
      "class": "TripodCapPanoramaOverlay",
      "inertia": true,
      "rotate": true,
      "id": "panorama_D6F5662D_DF15_3EFA_41EA_763184AC13CD_tcap0",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 3536,
         "width": 3536,
         "url": "media/panorama_D6F5662D_DF15_3EFA_41EA_763184AC13CD_tcap0.png"
        }
       ]
      },
      "angle": 0
     }
    ]
   }
  ],
  "thumbnailUrl": "media/panorama_D6F5662D_DF15_3EFA_41EA_763184AC13CD_t.jpg"
 },
 {
  "gyroscopeVerticalDraggingEnabled": true,
  "class": "PanoramaPlayer",
  "mouseControlMode": "drag_rotation",
  "touchControlMode": "drag_rotation",
  "preloadEnabled": false,
  "viewerArea": "this.MainViewer",
  "id": "MainViewerPanoramaPlayer",
  "gyroscopeEnabled": true,
  "displayPlaybackBar": true
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "timeToIdle": 1500,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 69.05,
   "pitch": -13.09
  },
  "manualRotationSpeed": 604,
  "id": "panorama_D6F5662D_DF15_3EFA_41EA_763184AC13CD_camera",
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  }
 },
 {
  "id": "panorama_D6E4762A_DF15_5EFE_4143_74EE403FD1B4",
  "hfovMax": 130,
  "vfov": 180,
  "hfovMin": 60,
  "cardboardMenu": "this.Menu_CC40B2AE_DF73_57F6_41E7_89A3AA4CBD92",
  "hfov": 360,
  "partial": false,
  "pitch": 0,
  "class": "Panorama",
  "label": "R0011013",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "class": "ImageResourceLevel",
       "height": 2688,
       "width": 5376,
       "url": "media/panorama_D6E4762A_DF15_5EFE_4143_74EE403FD1B4_hq.jpeg"
      },
      {
       "class": "ImageResourceLevel",
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_D6E4762A_DF15_5EFE_4143_74EE403FD1B4.jpeg"
      }
     ]
    },
    "thumbnailUrl": "media/panorama_D6E4762A_DF15_5EFE_4143_74EE403FD1B4_t.jpg",
    "overlays": [
     {
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "displayTooltipInTouchScreens": true,
        "mapColor": "image",
        "toolTip": "click to navigate"
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 12.71,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 170,
           "width": 196,
           "url": "media/panorama_D6E4762A_DF15_5EFE_4143_74EE403FD1B4_0_HS_0_0.png"
          }
         ]
        },
        "yaw": -72.48,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -14.57
       }
      ],
      "data": {
       "label": "Image"
      },
      "id": "overlay_CF3AE165_DF35_356A_41C6_9C52B5DD44AF",
      "useHandCursor": true,
      "rollOverDisplay": false
     },
     {
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_D6C39614_DF15_7EAA_41E4_8B988D03695D, this.camera_CC5A02DC_DF73_575A_41A0_74F3479BEF64); this.mainPlayList.set('selectedIndex', 3)",
        "displayTooltipInTouchScreens": true,
        "mapColor": "image",
        "toolTip": "click to navigate"
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 12.36,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 170,
           "width": 196,
           "url": "media/panorama_D6E4762A_DF15_5EFE_4143_74EE403FD1B4_0_HS_1_0.png"
          }
         ]
        },
        "yaw": 15.33,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -19.71
       }
      ],
      "data": {
       "label": "Image"
      },
      "id": "overlay_CFE13D60_DF37_4D6A_41E0_4C3A0B85DAD4",
      "useHandCursor": true,
      "rollOverDisplay": false
     },
     {
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_D6AC7697_DF15_5FD6_41E3_3D1AB91A9B75, this.camera_CC5DC2E6_DF73_5776_41E7_C23B1ABCB618); this.mainPlayList.set('selectedIndex', 2)",
        "displayTooltipInTouchScreens": true,
        "mapColor": "image",
        "toolTip": "click to navigate"
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 12.3,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 170,
           "width": 196,
           "url": "media/panorama_D6E4762A_DF15_5EFE_4143_74EE403FD1B4_0_HS_2_0.png"
          }
         ]
        },
        "yaw": 107.52,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -20.48
       }
      ],
      "data": {
       "label": "Image"
      },
      "id": "overlay_D095D078_DF35_535A_41D0_422A083A913F",
      "useHandCursor": true,
      "rollOverDisplay": false
     },
     {
      "maps": [],
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "displayTooltipInTouchScreens": true,
        "mapColor": "image",
        "toolTip": "click to navigate"
       },
       {
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 12.3,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "class": "ImageResourceLevel",
           "height": 170,
           "width": 196,
           "url": "media/panorama_D6E4762A_DF15_5EFE_4143_74EE403FD1B4_0_HS_3_0.png"
          }
         ]
        },
        "yaw": 107.52,
        "class": "HotspotPanoramaOverlayImage",
        "pitch": -20.48
       }
      ],
      "data": {
       "label": "Image"
      },
      "id": "overlay_CF13F8EC_DF35_D37A_41C8_6306EB5B7CF9",
      "useHandCursor": true,
      "rollOverDisplay": false
     },
     {
      "hfov": 24,
      "class": "TripodCapPanoramaOverlay",
      "inertia": true,
      "rotate": true,
      "id": "panorama_D6E4762A_DF15_5EFE_4143_74EE403FD1B4_tcap0",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "class": "ImageResourceLevel",
         "height": 3536,
         "width": 3536,
         "url": "media/panorama_D6F5662D_DF15_3EFA_41EA_763184AC13CD_tcap0.png"
        }
       ]
      },
      "angle": 0
     }
    ]
   }
  ],
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "backwardYaw": -130.58,
    "yaw": 15.33,
    "panorama": {
     "id": "panorama_D6C39614_DF15_7EAA_41E4_8B988D03695D",
     "hfovMax": 130,
     "vfov": 180,
     "hfovMin": 60,
     "cardboardMenu": "this.Menu_CC40B2AE_DF73_57F6_41E7_89A3AA4CBD92",
     "hfov": 360,
     "partial": false,
     "pitch": 0,
     "class": "Panorama",
     "label": "R0011015",
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 2688,
          "width": 5376,
          "url": "media/panorama_D6C39614_DF15_7EAA_41E4_8B988D03695D_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 2001,
          "width": 4002,
          "url": "media/panorama_D6C39614_DF15_7EAA_41E4_8B988D03695D.jpeg"
         }
        ]
       },
       "thumbnailUrl": "media/panorama_D6C39614_DF15_7EAA_41E4_8B988D03695D_t.jpg",
       "overlays": [
        {
         "maps": [],
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_D6E4762A_DF15_5EFE_4143_74EE403FD1B4, this.camera_CC796304_DF73_56AA_41C5_2D948206D7DE); this.mainPlayList.set('selectedIndex', 1)",
           "displayTooltipInTouchScreens": true,
           "mapColor": "image",
           "toolTip": "click to navigate"
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "hfov": 12.08,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 170,
              "width": 196,
              "url": "media/panorama_D6C39614_DF15_7EAA_41E4_8B988D03695D_0_HS_0_0.png"
             }
            ]
           },
           "yaw": -130.58,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -23.14
          }
         ],
         "data": {
          "label": "Image"
         },
         "id": "overlay_CFAC2C4E_DF2D_52B6_41E5_DA733321E96E",
         "useHandCursor": true,
         "rollOverDisplay": false
        },
        {
         "maps": [],
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_D548B654_DF15_DEAA_41D0_FB090628AE08, this.camera_CC7302FA_DF73_575E_41D7_2190C9BA4956); this.mainPlayList.set('selectedIndex', 4)",
           "displayTooltipInTouchScreens": true,
           "mapColor": "image",
           "toolTip": "click to navigate"
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "hfov": 15.57,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 216,
              "width": 247,
              "url": "media/panorama_D6C39614_DF15_7EAA_41E4_8B988D03695D_0_HS_1_0.png"
             }
            ]
           },
           "yaw": 5.8,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -19.9
          }
         ],
         "data": {
          "label": "Image"
         },
         "id": "overlay_CDB5A669_DF2D_3F7A_41DC_6669F22779BB",
         "useHandCursor": true,
         "rollOverDisplay": false
        },
        {
         "hfov": 24,
         "class": "TripodCapPanoramaOverlay",
         "inertia": true,
         "rotate": true,
         "id": "panorama_D6C39614_DF15_7EAA_41E4_8B988D03695D_tcap0",
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "height": 3536,
            "width": 3536,
            "url": "media/panorama_D6F5662D_DF15_3EFA_41EA_763184AC13CD_tcap0.png"
           }
          ]
         },
         "angle": 0
        }
       ]
      }
     ],
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "backwardYaw": 141.43,
       "yaw": 5.8,
       "panorama": {
        "id": "panorama_D548B654_DF15_DEAA_41D0_FB090628AE08",
        "hfovMax": 130,
        "vfov": 180,
        "hfovMin": 60,
        "cardboardMenu": "this.Menu_CC40B2AE_DF73_57F6_41E7_89A3AA4CBD92",
        "hfov": 360,
        "partial": false,
        "pitch": 0,
        "class": "Panorama",
        "label": "R0011016",
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "class": "ImageResourceLevel",
             "height": 2688,
             "width": 5376,
             "url": "media/panorama_D548B654_DF15_DEAA_41D0_FB090628AE08_hq.jpeg"
            },
            {
             "class": "ImageResourceLevel",
             "height": 2001,
             "width": 4002,
             "url": "media/panorama_D548B654_DF15_DEAA_41D0_FB090628AE08.jpeg"
            }
           ]
          },
          "thumbnailUrl": "media/panorama_D548B654_DF15_DEAA_41D0_FB090628AE08_t.jpg",
          "overlays": [
           {
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_D6C39614_DF15_7EAA_41E4_8B988D03695D, this.camera_CC4922BD_DF73_57D5_41B1_85B6F85832D4); this.mainPlayList.set('selectedIndex', 3)",
              "displayTooltipInTouchScreens": true,
              "mapColor": "image",
              "toolTip": "click to navigate"
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "hfov": 15.01,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 232,
                 "width": 241,
                 "url": "media/panorama_D548B654_DF15_DEAA_41D0_FB090628AE08_0_HS_0_0.png"
                }
               ]
              },
              "yaw": 141.43,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -21.97
             }
            ],
            "data": {
             "label": "Image"
            },
            "id": "overlay_CEB75E1E_DF15_4ED6_41E7_FF1F15103DA4",
            "useHandCursor": true,
            "rollOverDisplay": false
           },
           {
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "image"
             },
             {
              "class": "HotspotPanoramaOverlayArea"
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "hfov": 15.01,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 232,
                 "width": 241,
                 "url": "media/panorama_D548B654_DF15_DEAA_41D0_FB090628AE08_0_HS_1_0.png"
                }
               ]
              },
              "yaw": 141.43,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -21.97
             }
            ],
            "data": {
             "label": "Image"
            },
            "id": "overlay_CF4F25C6_DF15_5DB6_41E7_9B0A79468B20",
            "useHandCursor": true,
            "rollOverDisplay": false
           },
           {
            "maps": [],
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.mainPlayList.set('selectedIndex', 0)",
              "displayTooltipInTouchScreens": true,
              "mapColor": "image",
              "toolTip": "click to navigate"
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "hfov": 12.23,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "class": "ImageResourceLevel",
                 "height": 170,
                 "width": 196,
                 "url": "media/panorama_D548B654_DF15_DEAA_41D0_FB090628AE08_0_HS_2_0.png"
                }
               ]
              },
              "yaw": -143.53,
              "class": "HotspotPanoramaOverlayImage",
              "pitch": -21.43
             }
            ],
            "data": {
             "label": "Image"
            },
            "id": "overlay_CD029ADE_DF15_7756_41EA_ABFE3A2210DC",
            "useHandCursor": true,
            "rollOverDisplay": false
           },
           {
            "hfov": 24,
            "class": "TripodCapPanoramaOverlay",
            "inertia": true,
            "rotate": true,
            "id": "panorama_D548B654_DF15_DEAA_41D0_FB090628AE08_tcap0",
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "class": "ImageResourceLevel",
               "height": 3536,
               "width": 3536,
               "url": "media/panorama_D6F5662D_DF15_3EFA_41EA_763184AC13CD_tcap0.png"
              }
             ]
            },
            "angle": 0
           }
          ]
         }
        ],
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "backwardYaw": 5.8,
          "yaw": 141.43,
          "panorama": "this.panorama_D6C39614_DF15_7EAA_41E4_8B988D03695D",
          "distance": 1
         }
        ],
        "thumbnailUrl": "media/panorama_D548B654_DF15_DEAA_41D0_FB090628AE08_t.jpg"
       },
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "backwardYaw": 15.33,
       "yaw": -130.58,
       "panorama": "this.panorama_D6E4762A_DF15_5EFE_4143_74EE403FD1B4",
       "distance": 1
      }
     ],
     "thumbnailUrl": "media/panorama_D6C39614_DF15_7EAA_41E4_8B988D03695D_t.jpg"
    },
    "distance": 1
   },
   {
    "class": "AdjacentPanorama",
    "backwardYaw": -71.53,
    "yaw": 107.52,
    "panorama": {
     "id": "panorama_D6AC7697_DF15_5FD6_41E3_3D1AB91A9B75",
     "hfovMax": 130,
     "vfov": 180,
     "hfovMin": 60,
     "cardboardMenu": "this.Menu_CC40B2AE_DF73_57F6_41E7_89A3AA4CBD92",
     "hfov": 360,
     "partial": false,
     "pitch": 0,
     "class": "Panorama",
     "label": "R0011014",
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "class": "ImageResourceLevel",
          "height": 2688,
          "width": 5376,
          "url": "media/panorama_D6AC7697_DF15_5FD6_41E3_3D1AB91A9B75_hq.jpeg"
         },
         {
          "class": "ImageResourceLevel",
          "height": 2001,
          "width": 4002,
          "url": "media/panorama_D6AC7697_DF15_5FD6_41E3_3D1AB91A9B75.jpeg"
         }
        ]
       },
       "thumbnailUrl": "media/panorama_D6AC7697_DF15_5FD6_41E3_3D1AB91A9B75_t.jpg",
       "overlays": [
        {
         "maps": [],
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_D6E4762A_DF15_5EFE_4143_74EE403FD1B4, this.camera_CC6452F0_DF73_576A_419D_750C123ED3CA); this.mainPlayList.set('selectedIndex', 1)",
           "displayTooltipInTouchScreens": true,
           "mapColor": "image",
           "toolTip": "click to navigate"
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "hfov": 12.43,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "class": "ImageResourceLevel",
              "height": 170,
              "width": 196,
              "url": "media/panorama_D6AC7697_DF15_5FD6_41E3_3D1AB91A9B75_0_HS_0_0.png"
             }
            ]
           },
           "yaw": -71.53,
           "class": "HotspotPanoramaOverlayImage",
           "pitch": -18.76
          }
         ],
         "data": {
          "label": "Image"
         },
         "id": "overlay_CFBED97D_DF33_755A_41E4_0620C52B68BC",
         "useHandCursor": true,
         "rollOverDisplay": false
        },
        {
         "hfov": 24,
         "class": "TripodCapPanoramaOverlay",
         "inertia": true,
         "rotate": true,
         "id": "panorama_D6AC7697_DF15_5FD6_41E3_3D1AB91A9B75_tcap0",
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "class": "ImageResourceLevel",
            "height": 3536,
            "width": 3536,
            "url": "media/panorama_D6F5662D_DF15_3EFA_41EA_763184AC13CD_tcap0.png"
           }
          ]
         },
         "angle": 0
        }
       ]
      }
     ],
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "backwardYaw": 107.52,
       "yaw": -71.53,
       "panorama": "this.panorama_D6E4762A_DF15_5EFE_4143_74EE403FD1B4",
       "distance": 1
      }
     ],
     "thumbnailUrl": "media/panorama_D6AC7697_DF15_5FD6_41E3_3D1AB91A9B75_t.jpg"
    },
    "distance": 1
   }
  ],
  "thumbnailUrl": "media/panorama_D6E4762A_DF15_5EFE_4143_74EE403FD1B4_t.jpg"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "timeToIdle": 1500,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "manualRotationSpeed": 604,
  "id": "panorama_D6E4762A_DF15_5EFE_4143_74EE403FD1B4_camera",
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  }
 },
 "this.panorama_D6AC7697_DF15_5FD6_41E3_3D1AB91A9B75",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "timeToIdle": 1500,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "manualRotationSpeed": 604,
  "id": "panorama_D6AC7697_DF15_5FD6_41E3_3D1AB91A9B75_camera",
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  }
 },
 "this.panorama_D6C39614_DF15_7EAA_41E4_8B988D03695D",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "timeToIdle": 1500,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "manualRotationSpeed": 604,
  "id": "panorama_D6C39614_DF15_7EAA_41E4_8B988D03695D_camera",
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  }
 },
 "this.panorama_D548B654_DF15_DEAA_41D0_FB090628AE08",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "timeToIdle": 1500,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "manualRotationSpeed": 604,
  "id": "panorama_D548B654_DF15_DEAA_41D0_FB090628AE08_camera",
  "idleSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "camera": "this.panorama_D6F5662D_DF15_3EFA_41EA_763184AC13CD_camera",
    "media": "this.panorama_D6F5662D_DF15_3EFA_41EA_763184AC13CD"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "camera": "this.panorama_D6E4762A_DF15_5EFE_4143_74EE403FD1B4_camera",
    "media": "this.panorama_D6E4762A_DF15_5EFE_4143_74EE403FD1B4"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "camera": "this.panorama_D6AC7697_DF15_5FD6_41E3_3D1AB91A9B75_camera",
    "media": "this.panorama_D6AC7697_DF15_5FD6_41E3_3D1AB91A9B75"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "camera": "this.panorama_D6C39614_DF15_7EAA_41E4_8B988D03695D_camera",
    "media": "this.panorama_D6C39614_DF15_7EAA_41E4_8B988D03695D"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 0)",
    "camera": "this.panorama_D548B654_DF15_DEAA_41D0_FB090628AE08_camera",
    "end": "this.trigger('tourEnded')",
    "media": "this.panorama_D548B654_DF15_DEAA_41D0_FB090628AE08"
   }
  ]
 },
 "this.Menu_CC40B2AE_DF73_57F6_41E7_89A3AA4CBD92",
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "timeToIdle": 1500,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -174.2,
   "pitch": 0
  },
  "manualRotationSpeed": 604,
  "id": "camera_CC4922BD_DF73_57D5_41B1_85B6F85832D4",
  "idleSequence": {
   "id": "sequence_CC4952BE_DF73_57D6_41E8_BD5E86D1D09B",
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "initialSequence": "this.sequence_CC4952BE_DF73_57D6_41E8_BD5E86D1D09B"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "timeToIdle": 1500,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 21.58,
   "pitch": 0
  },
  "manualRotationSpeed": 604,
  "id": "camera_CC4D72C8_DF73_57BA_41DF_2E7A97081032",
  "idleSequence": {
   "id": "sequence_CC4D62C8_DF73_57BA_41DF_B91EE532A45F",
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "initialSequence": "this.sequence_CC4D62C8_DF73_57BA_41DF_B91EE532A45F"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "timeToIdle": 1500,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 27.09,
   "pitch": -15.15
  },
  "manualRotationSpeed": 604,
  "id": "camera_CC52A2D2_DF73_57AF_41E9_CA3741831A24",
  "idleSequence": {
   "id": "sequence_CC52F2D3_DF73_57AE_41E9_273BE2097D96",
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "initialSequence": "this.sequence_CC52F2D3_DF73_57AE_41E9_273BE2097D96"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "timeToIdle": 1500,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 49.42,
   "pitch": 0
  },
  "manualRotationSpeed": 604,
  "id": "camera_CC5A02DC_DF73_575A_41A0_74F3479BEF64",
  "idleSequence": {
   "id": "sequence_CC5A32DD_DF73_575A_41E5_ECD94BA73AFA",
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "initialSequence": "this.sequence_CC5A32DD_DF73_575A_41E5_ECD94BA73AFA"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "timeToIdle": 1500,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 108.47,
   "pitch": 0
  },
  "manualRotationSpeed": 604,
  "id": "camera_CC5DC2E6_DF73_5776_41E7_C23B1ABCB618",
  "idleSequence": {
   "id": "sequence_CC5DF2E6_DF73_5776_41D2_D4381E1659C7",
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "initialSequence": "this.sequence_CC5DF2E6_DF73_5776_41D2_D4381E1659C7"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "timeToIdle": 1500,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -72.48,
   "pitch": 0
  },
  "manualRotationSpeed": 604,
  "id": "camera_CC6452F0_DF73_576A_419D_750C123ED3CA",
  "idleSequence": {
   "id": "sequence_CC6442F1_DF73_576A_41E6_7DBAA001D564",
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "initialSequence": "this.sequence_CC6442F1_DF73_576A_41E6_7DBAA001D564"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "timeToIdle": 1500,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -38.57,
   "pitch": 0
  },
  "manualRotationSpeed": 604,
  "id": "camera_CC7302FA_DF73_575E_41D7_2190C9BA4956",
  "idleSequence": {
   "id": "sequence_CC7332FA_DF73_575E_41E4_481CEE0D33AB",
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "initialSequence": "this.sequence_CC7332FA_DF73_575E_41E4_481CEE0D33AB"
 },
 {
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "timeToIdle": 1500,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -164.67,
   "pitch": 0
  },
  "manualRotationSpeed": 604,
  "id": "camera_CC796304_DF73_56AA_41C5_2D948206D7DE",
  "idleSequence": {
   "id": "sequence_CC799304_DF73_56AA_41DF_495F52096150",
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false,
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "initialSequence": "this.sequence_CC799304_DF73_56AA_41DF_495F52096150"
 }
], "children": [
 {
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarLeft": 0,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderRadius": 0,
  "progressBarBorderRadius": 0,
  "propagateClick": false,
  "playbackBarProgressBorderSize": 0,
  "playbackBarBottom": 5,
  "progressBorderColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressOpacity": 1,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipShadowOpacity": 1,
  "progressBarBackgroundColorDirection": "vertical",
  "shadow": false,
  "borderRadius": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipShadowBlurRadius": 3,
  "toolTipPaddingBottom": 4,
  "playbackBarHeadShadow": true,
  "toolTipTextShadowOpacity": 0,
  "toolTipShadowColor": "#333333",
  "progressBackgroundOpacity": 1,
  "playbackBarHeadBorderRadius": 0,
  "toolTipShadowHorizontalLength": 0,
  "progressBarOpacity": 1,
  "toolTipTextShadowColor": "#000000",
  "playbackBarOpacity": 1,
  "toolTipBorderColor": "#767676",
  "playbackBarHeadBorderColor": "#000000",
  "height": "100%",
  "playbackBarBorderColor": "#FFFFFF",
  "width": "100%",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "paddingTop": 0,
  "playbackBarHeadBorderSize": 0,
  "transitionDuration": 500,
  "toolTipOpacity": 1,
  "progressBarBorderColor": "#000000",
  "toolTipBorderRadius": 3,
  "playbackBarBorderRadius": 0,
  "paddingLeft": 0,
  "borderSize": 0,
  "id": "MainViewer",
  "toolTipPaddingTop": 4,
  "toolTipShadowSpread": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBorderSize": 0,
  "paddingBottom": 0,
  "minHeight": 50,
  "playbackBarProgressBorderColor": "#000000",
  "transitionMode": "blending",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipFontColor": "#606060",
  "class": "ViewerArea",
  "toolTipDisplayTime": 600,
  "toolTipPaddingLeft": 6,
  "toolTipPaddingRight": 6,
  "playbackBarHeadHeight": 15,
  "minWidth": 100,
  "toolTipFontFamily": "Arial",
  "playbackBarHeight": 10,
  "progressLeft": 0,
  "progressBottom": 0,
  "playbackBarHeadWidth": 6,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarBorderSize": 0,
  "progressBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressOpacity": 1,
  "playbackBarRight": 0,
  "progressHeight": 10,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadOpacity": 1,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipBorderSize": 1,
  "toolTipFontStyle": "normal",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipFontSize": 12,
  "progressBarBorderSize": 0,
  "paddingRight": 0,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "progressRight": 0,
  "toolTipFontWeight": "normal"
 },
 {
  "paddingLeft": 0,
  "top": "0%",
  "borderSize": 0,
  "id": "Image_D1C962BC_DA2E_6621_41EA_86D8DE954A1B",
  "url": "skin/Image_D1C962BC_DA2E_6621_41EA_86D8DE954A1B.png",
  "propagateClick": false,
  "paddingRight": 0,
  "paddingBottom": 0,
  "verticalAlign": "middle",
  "minHeight": 1,
  "shadow": false,
  "borderRadius": 0,
  "class": "Image",
  "click": "this.openLink(\"http://www.londonshoot.com\", \"_blank\")",
  "minWidth": 1,
  "horizontalAlign": "center",
  "cursor": "hand",
  "width": "6.538%",
  "data": {
   "name": "Image2133"
  },
  "height": "5.864%",
  "scaleMode": "fit_inside",
  "paddingTop": 0,
  "left": "0%",
  "backgroundOpacity": 0,
  "maxWidth": 1549,
  "maxHeight": 774
 },
 {
  "toolTipBackgroundColor": "#F6F6F6",
  "paddingLeft": 0,
  "top": "0.85%",
  "borderSize": 0,
  "id": "IconButton_CFB89384_DE26_66E1_41E2_4A5E18CD0E3F",
  "toolTipOpacity": 1,
  "toolTipPaddingTop": 4,
  "toolTipShadowSpread": 0,
  "propagateClick": false,
  "paddingRight": 0,
  "paddingBottom": 0,
  "mode": "toggle",
  "verticalAlign": "middle",
  "minHeight": 1,
  "toolTip": "Fullscreen",
  "transparencyActive": true,
  "shadow": false,
  "borderRadius": 0,
  "toolTipFontColor": "#606060",
  "toolTipPaddingLeft": 6,
  "toolTipShadowBlurRadius": 3,
  "toolTipPaddingBottom": 4,
  "toolTipDisplayTime": 600,
  "toolTipTextShadowOpacity": 0,
  "toolTipPaddingRight": 6,
  "toolTipShadowColor": "#333333",
  "minWidth": 1,
  "toolTipFontFamily": "Arial",
  "toolTipShadowHorizontalLength": 0,
  "horizontalAlign": "center",
  "cursor": "hand",
  "toolTipTextShadowColor": "#000000",
  "class": "IconButton",
  "width": 49,
  "iconURL": "skin/IconButton_CFB89384_DE26_66E1_41E2_4A5E18CD0E3F.png",
  "toolTipShadowVerticalLength": 0,
  "height": 39,
  "toolTipBorderColor": "#767676",
  "data": {
   "name": "IconButton1493"
  },
  "toolTipBorderSize": 1,
  "paddingTop": 0,
  "toolTipFontStyle": "normal",
  "toolTipTextShadowBlurRadius": 3,
  "backgroundOpacity": 0,
  "maxWidth": 128,
  "right": "0.21%",
  "toolTipFontWeight": "normal",
  "toolTipFontSize": 12,
  "toolTipShadowOpacity": 1,
  "maxHeight": 128,
  "toolTipBorderRadius": 3
 },
 {
  "paddingLeft": 0,
  "top": "0.08%",
  "borderSize": 0,
  "id": "Image_D566976A_DE4F_7F1F_41E5_0D50746E474C",
  "url": "skin/Image_D566976A_DE4F_7F1F_41E5_0D50746E474C.png",
  "propagateClick": false,
  "paddingRight": 0,
  "paddingBottom": 0,
  "verticalAlign": "middle",
  "minHeight": 1,
  "shadow": false,
  "borderRadius": 0,
  "class": "Image",
  "minWidth": 1,
  "horizontalAlign": "center",
  "height": "6.327%",
  "width": "3.632%",
  "data": {
   "name": "Image1553"
  },
  "scaleMode": "fit_inside",
  "paddingTop": 0,
  "left": "39.69%",
  "backgroundOpacity": 0,
  "maxWidth": 512,
  "maxHeight": 512
 },
 {
  "paddingLeft": 0,
  "top": "0.08%",
  "borderSize": 0,
  "id": "Image_D584AEC1_DE53_510D_41CC_23BDB0B45877",
  "url": "skin/Image_D584AEC1_DE53_510D_41CC_23BDB0B45877.png",
  "propagateClick": false,
  "paddingRight": 0,
  "paddingBottom": 0,
  "verticalAlign": "middle",
  "minHeight": 1,
  "shadow": false,
  "borderRadius": 0,
  "class": "Image",
  "minWidth": 1,
  "horizontalAlign": "center",
  "height": "6.713%",
  "width": "2.821%",
  "data": {
   "name": "Image1600"
  },
  "scaleMode": "fit_inside",
  "paddingTop": 0,
  "left": "45.24%",
  "backgroundOpacity": 0,
  "maxWidth": 512,
  "maxHeight": 512
 },
 {
  "paddingLeft": 0,
  "top": "0.08%",
  "borderSize": 0,
  "id": "Image_D5EBA936_DE55_3377_41E0_19C2F12585E4",
  "url": "skin/Image_D5EBA936_DE55_3377_41E0_19C2F12585E4.png",
  "propagateClick": false,
  "paddingRight": 0,
  "paddingBottom": 0,
  "verticalAlign": "middle",
  "minHeight": 1,
  "shadow": false,
  "borderRadius": 0,
  "minWidth": 1,
  "horizontalAlign": "center",
  "class": "Image",
  "height": "6.79%",
  "width": "2.863%",
  "data": {
   "name": "Image1658"
  },
  "scaleMode": "fit_inside",
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "maxWidth": 512,
  "right": "46.97%",
  "maxHeight": 512
 },
 {
  "paddingLeft": 0,
  "top": "0.13%",
  "borderSize": 0,
  "id": "Image_D2421A6B_DE57_511D_41E4_8338633CF51E",
  "url": "skin/Image_D2421A6B_DE57_511D_41E4_8338633CF51E.png",
  "propagateClick": false,
  "paddingRight": 0,
  "paddingBottom": 0,
  "verticalAlign": "middle",
  "minHeight": 1,
  "shadow": false,
  "borderRadius": 0,
  "minWidth": 1,
  "horizontalAlign": "center",
  "class": "Image",
  "height": "7.407%",
  "width": "5%",
  "data": {
   "name": "Image1707"
  },
  "scaleMode": "fit_inside",
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "maxWidth": 512,
  "right": "40.56%",
  "maxHeight": 512
 }
], 
 "start": "this.mainPlayList.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_CFB89384_DE26_66E1_41E2_4A5E18CD0E3F].forEach(function(component) { component.set('visible', false); }) }",
 "paddingLeft": 0,
 "borderSize": 0,
 "id": "rootPlayer",
 "propagateClick": false,
 "paddingRight": 0,
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "minHeight": 20,
 "contentOpaque": false,
 "shadow": false,
 "buttonToggleFullscreen": "this.IconButton_CFB89384_DE26_66E1_41E2_4A5E18CD0E3F",
 "overflow": "visible",
 "borderRadius": 0,
 "class": "Player",
 "scripts": {
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller, exclude){  var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "autotriggerAtStart": function(playListItem, callback, once){  var onPlaylistBegin = function(event){ callback(); if(once == true) playListItem.unbind('begin', onPlaylistBegin, this); }; playListItem.bind('begin', onPlaylistBegin, this); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "existsKey": function(key){  return key in window; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "unregisterKey": function(key){  delete window[key]; },
  "getKey": function(key){  return window[key]; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "registerKey": function(key, value){  window[key] = value; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined) return; var objs = window.pauseGlobalAudiosState[caller]; if (objs == undefined) return; delete window.pauseGlobalAudiosState[caller]; if (Object.keys(window.pauseGlobalAudiosState).length > 0) { if (window.restoreGlobalAudiosState == undefined) window.restoreGlobalAudiosState = {}; if (!(caller in window.restoreGlobalAudiosState)) window.restoreGlobalAudiosState[caller] = objs; } else { var restoreFunc = function(objs) { for (var i = 0, count = objs.length; i < count; ++i) { var a = objs[i]; if (a.get('state') == 'paused') a.play(); } }; restoreFunc(objs); if (window.restoreGlobalAudiosState != undefined) { while (window.restoreGlobalAudiosState.length > 0) { restoreFunc(window.restoreGlobalAudiosState.pop()); } window.restoreGlobalAudiosState = undefined; } } },
  "pauseGlobalAudios": function(caller, exclude){  var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if(window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); if(window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; var objs = window.pauseGlobalAudiosState[caller]; if(objs == undefined){ objs = []; window.pauseGlobalAudiosState[caller] = objs; } for (var i = 0, count = audios.length; i<count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); objs.push(a); } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); }
 },
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "minWidth": 20,
 "creationPolicy": "delayed",
 "horizontalAlign": "left",
 "width": "100%",
 "data": {
  "name": "Player456"
 },
 "height": "100%",
 "vrPolyfillScale": 0.5,
 "desktopMipmappingEnabled": true,
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "scrollBarWidth": 10,
 "mobileMipmappingEnabled": true,
 "gap": 10,
 "layout": "absolute",
 "mouseWheelEnabled": true
})