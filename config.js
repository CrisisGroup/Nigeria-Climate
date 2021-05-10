var config = {
    style: 'mapbox://styles/franzindustries/cknpah4xc36pi17p1j5wb6ecr',
    accessToken: 'pk.eyJ1IjoiZGFsdG9ud2IiLCJhIjoiOWdSSXFQSSJ9.HZyjh4g3TAAOAncwelv9Vw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: true,
    title: 'The Climate Factor in Nigeria’s Farmer-Herder Violence',
    subtitle: '',
    byline: '',
    footer: '<ul><li><strong>Lead Contributor</strong>: Ulrich Eberle</li><li><strong>Visualizations</strong>: Paul Franz</li></ul><br /><em>Empirical analysis is based on Eberle, U. J,, D. Rohner and M. Thoenig. 2020 “Heat and Hate: Climate Security and Farmer-Herder Conflicts in Africa”. </em><a href="https://esoc.princeton.edu/WP22" target="_blank">ESOC Working Paper 22</a>.<br /><br /><strong>Data Sources</strong>:<br /><br /> <a href="http://www.esa-landcover-cci.org/?q=node/164" target="_blank">European Space Agency</a>. 2017. Land Cover CCI Product User Guide Version 2. <br /><br /><a href="https://gadm.org/" target="_blank">GADM</a>. 2012. “Database of Global Administrative Areas” <br /><br />Jones, P. and I. Harris. 2008. “CRU Time Series (TS) High Resolution Gridded Datasets v. 4.05." <a href="https://crudata.uea.ac.uk/cru/data/hrg/" target="_blank">Climate Research Unit</a>. <br /><br />Luck, M., M. Landis, and F. Gassert. 2015. "Aqueduct Water Stress Projections: Decadal Projections of Water Supply and Demand using CMIP5 GCMs." <a href="https://www.wri.org/applications/aqueduct/water-risk-atlas/#/?advanced=false&basemap=hydro&indicator=w_awr_def_tot_cat&lat=-14.445396942837744&lng=-142.85354599620152&mapMode=view&month=1&opacity=0.5&ponderation=DEF&predefined=false&projection=absolute&scenario=optimistic&scope=baseline&timeScale=annual&year=baseline&zoom=2" target="_blank">World Resources Institute</a>.<br /><br /> Raleigh, C., A. Linke, H. Hegre and J. Karlsen. 2010. “<a href="https://acleddata.com/data-export-tool/" target="_blank">Introducing ACLED Armed Conflict Location and Event Data</a>." Journal of Peace Research 47(5):651-660.<br /><br /> <a href="https://www.openstreetmap.org" target="_blank">OpenStreetMap</a>, <a href="https://www.mapbox.com" target="_blank">Mapbox</a><br /><br /><img src="images/crisis_group_dark_logo.png" width="150" height="150" />',
    chapters: [
        {
            id: 'intro',
            alignment: 'left',
            hidden: false,
            title: 'Climate Change and Deadly Conflict in Africa',
            image: '',
            description: 'Africa is especially vulnerable to climate change, as millions are already experiencing record heat, extreme precipitation and rising sea levels. Increasingly, the security implications of changing weather patterns are visible in deadly land resource disputes between farmers and herders across the continent – including in the continent’s most populous country, Nigeria.',
            location: {
                center: [-3.15195, 4.63389],
                zoom: 3.5,
                pitch: 13,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                     layer: 'nigeria_federal',
                     opacity: 0.3,
                     duration: 2000
                 },
                 {
                   layer: 'country-label',
                   opacity: 1,
                   duration: 3000
                 }
            ],
            onChapterExit: [
              {
              layer: 'nigeria_federal',
              opacity: 0,
              duration: 4000
            }
            ]
        },
        // Slide 3, attacks across continent
        {
            id: 'slide1',
            alignment: 'left',
            hidden: false,
            title: 'Africa’s Farmer-Herder Violence: An Arc of Instability',
            image: '',
            description: 'Rising temperatures and erratic rainfall have intensified resource competition between farmers and herders, both shifting traditional migratory patterns and exacerbating intercommunal violence. In Nigeria, many herders are from the Fulani people, while most farmers are of other ethnicities. (Data: <a href="http://www.acleddata.com/" target="_blank">ACLED</a>)<br /><h4>Total fatalities - land-related violent incidents since 2017</h4><img style="width: auto !important;" src="images/fatalities_vertical_1.png" />',
            location: {
              center: [-3.15195, 4.63389],
              zoom: 3.5,
              pitch: 13,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                   layer: 'satellite',
                   opacity: 0,
                   duration: 1000
              },
              {
                    layer: 'attacks',
                    opacity: 0.2,
                    duration: 2000
              }
            ],
            onChapterExit: [
              {
                    layer: 'attacks',
                    opacity: 0,
                    duration: 2000
              }
            ]
        },
        // Climate change, rainfall vs. temperature (three slides)
        // 3A
        {
            id: 'temperature',
            alignment: 'left',
            hidden: false,
            title: 'Climate Change and Rising Temperatures',
            image: '',
            description: 'From 1950 to 2010, average annual temperatures across the Sahel and in some neighbouring countries increased by 1°C and average annual rainfall decreased by 4.1cm, outpacing global climate trends on both counts. Here is the eleven-year temperature average in 1955. (Data: CRU)<h4>Temperature average 1945-1955</h4><div id="wri-values" class="row labels"><div class="label">16.4°C</div><div class="label"> </div>  <div class="label">30.5°C</div></div><div class="temperature-legend-colors"></div>',
            location: {
              center: [-3.15195, 4.63389],
              zoom: 3.5,
              pitch: 13,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                   layer: 'temperature',
                   opacity: .6,
                   duration: 1000
              },
            ],
            onChapterExit: [
              {
              layer: 'temperature',
              opacity: 0,
              duration: 1000
            }
            ]
        },
        // 3B
        {
            id: 'temperature2',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'Now here is the eleven-year temperature average in 2010. (Data: CRU)<h4>Temperature average 2005-2015</h4><div id="wri-values" class="row labels"><div class="label">16.4°C</div><div class="label"> </div>  <div class="label">30.5°C</div></div><div class="temperature-legend-colors"></div>',
            location: {
              center: [-3.15195, 4.63389],
              zoom: 3.5,
              pitch: 13,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                   layer: 'temperature2010',
                   opacity: .6,
                   duration: 1000
              },
            ],
            onChapterExit: [
              {
              layer: 'temperature2010',
              opacity: 0,
              duration: 1000
            }
            ]
        },
        {
            id: 'rainfall',
            alignment: 'left',
            hidden: false,
            title: 'Climate Change Increases Economic Uncertainty',
            image: '',
            description: 'Global warming has not only increased the severity of droughts, but also contributed to extreme seasonal variability in water supply across the Sahel and neighbouring countries. These long-term climatic trends disrupt and harm traditional livelihoods like farming and herding, increasing economic uncertainty. (Data: WRI)<h4>Seasonal variability in water supply (1950-2010 average)</h4><div id="wri-values" class="row labels"><div class="label">< Low</div><div class="label"> </div>  <div class="label">High ></div></div><div class="wri-legend-colors"></div>',
            location: {
              center: [-3.15195, 4.63389],
              zoom: 3.5,
              pitch: 13,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                   layer: 'rainfall',
                   opacity: 1,
                   duration: 3000
              },
            ],
            onChapterExit: [
              {
              layer: 'rainfall',
              opacity: 0,
              duration: 3000
            }
            ]
        },
        // Nigeria land use (two slides)
        {
            id: 'landuse',
            alignment: 'left',
            hidden: false,
            title: 'Nigeria’s Agricultural Dependence',
            image: '',
            description: 'Like many countries in Africa, Nigeria is highly dependent on agriculture. Approximately two thirds of the labour force makes a living through farming or pastoralism (herding). With very little irrigated land, both activities rely heavily on seasonal rainfall and related weather patterns, so the effects of climate change can be intense. (Data: CCI-LC (ESA))<h4>Land use data, 2018</h4><img style="width: auto !important;" src="images/landuse_legend.png" /> ',
            location: {
              center: [6.75824, 8.03246],
              zoom: 6,
              pitch: 38,
              bearing: -12.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                   layer: 'nigeria_landuse',
                   opacity: 1,
                   duration: 3000
              }
            ],
            onChapterExit: [
            {
            layer: 'nigeria_landuse',
            opacity: 0,
            duration: 2000
          }
            ]
        },
        {
            id: 'landuse2',
            alignment: 'left',
            hidden: false,
            title: 'Geography of Nigeria’s Farmer-Herder Violence ',
            image: '',
            description: 'High population growth, the Boko Haram insurgency and cattle rustling have forced herders in the north to migrate toward the Middle Belt in central Nigeria in search of pasture and water. Their movement has inflamed competition over land resources already heightened by increasing climate change and led to more frequent disputes between herders and farmers. Crisis Group’s analysis finds that deadly conflicts between farmers and herders are concentrated in Nigeria’s grasslands and along the agricultural fringe used by both groups – especially when land productivity is very low. (Data: CCI-LC (ESA))<h4>Land use categories most prone to resource competition</h4><img style="width: auto !important;" src="images/conflict_land_use_legend.png" />',
            location: {
              center: [6.75824, 8.03246],
              zoom: 6,
              pitch: 38,
              bearing: -12.80
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                   layer: 'nigeria_landuse2',
                   opacity: 1,
                   duration: 3000
              }
            ],
            onChapterExit: [
            {
            layer: 'nigeria_landuse2',
            opacity: 0,
            duration: 2000
          }
            ]
        },
        // Nigeria FHV incidents
        {
            id: 'slide11',
            alignment: 'left',
            hidden: false,
            title: 'Nigeria’s Farmer-Herder Violence Trend',
            image: '',
            description: 'Farmer-herder violence has become a major security problem, killing and displacing thousands of Nigerians. Climate change has aggravated the conflict. In the first half of 2018, farmer-herder violence killed up to six times more people than the Boko Haram insurgency in the country’s North East. (Data: <a href="http://www.acleddata.com/" target="_blank">ACLED</a>)<h4>Total fatalities in land-related violent incidents since 2017</h4><img style="width: auto !important;" src="images/fatalities_vertical_2.png" />',
            location: {
              center: [6.37998, 9.09991],
              zoom: 5.50,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'acled_nigeria_fhv',
                opacity: 0.2,
                duration: 2000
              },
              {
                layer: '3d_labels',
                opacity: 0,
                duration: 1000
              },
              {
                layer: 'nigeria_states_labels',
                opacity: 0,
                duration: 3000
              }
            ],
            onChapterExit: [
              {
                layer: 'acled_nigeria_fhv',
                opacity: 0,
                duration: 2000
              }
            ]
        },
        // Vulnerable Nigerian states
        {
            id: 'slide12',
            alignment: 'right',
            hidden: false,
            title: 'Nigeria’s Vulnerable Middle Belt Region',
            image: '',
            description: 'While farmer-herder violence has spread across the country, Nigeria’s Middle Belt is particularly affected. Since 2018, Benue, Kaduna, Plateau and Nasarawa states have witnessed hundreds of clashes, armed attacks on communities or other violence involving farmers and herders. (Data: <a href="http://www.acleddata.com/" target="_blank">ACLED</a>)<h4>Total fatalities by state - land-related violence since 2017</h4><img style="width: auto !important;" src="images/heightmap.png" />',
            location: {
                center: [9.030198, 8.195849],
                zoom: 6.70,
                pitch: 58.00,
                bearing: 40.25

            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              //{
              //layer: 'nigeria_states',
              //opacity: 0.3,
              //duration: 2000
            //},
            {
              layer: 'nga1-heightmaps',
              opacity: 0.6,
              duration: 1500
            },
            {
                layer: 'country-label',
                opacity: 0,
                duration: 2000
            },
            {
              layer: 'benue_nasarawa',
              opacity: 0,
              duration: 2000
            },
            {
              layer: '3d_labels',
              opacity: 1,
              duration: 3000
            }
            ],
            onChapterExit: [
              //{
              //  layer: 'nigeria_states',
              //  opacity: 0,
              //  duration: 2000
              //}
              {
                layer: 'nga1-heightmaps',
                opacity: 0,
                duration: 1500
              }
            ]
        },
        // Zoom to Benue and Nasarawa
        {
            id: 'fragile-states',
            alignment: 'right',
            hidden: false,
            title: 'Focus on Benue and Nasarawa States',
            image: '',
            description: 'The situation in Benue and Nasarawa states demonstrates the relationship between climate fragility, migration and ethnic tensions. In late 2017, after Benue passed an anti-grazing law in an effort to curb trespassing on farms by migratory herders and increasing levels of farmer-herder violence, thousands of herders were forced to relocate to neighbouring Nasarawa.',
            location: {
                center: [8.947652, 7.748859],
                zoom: 7.4,
                pitch: 21,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'benue_nasarawa',
                opacity: .3,
                duration: 2000
              },
              {
                layer: '3d_labels',
                opacity: 1,
                duration: 3000
              },
              {
              layer: 'satellite',
              opacity: 0,
              duration: 3000
            }
            ],
            onChapterExit: [
              {
                layer: 'benue_nasarawa',
                opacity: 0,
                duration: 2000
              }
            ]
        },
        {
            id: 'satimg1',
            alignment: 'right',
            hidden: false,
            title: 'Nasarawa’s Violent Spark',
            image: '',
            description: 'The influx of Fulani pastoralists into Nasarawa from Benue aggravated longstanding tensions with ethnic Tiv farming communities. Intercommunal violence soon intensified.',
            location: {
                center: [9.141180, 8.120931],
                zoom: 14.5,
                pitch: 58,
                bearing: -28
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
              {
                layer: 'satellite',
                opacity: 1,
                duration: 3000
              },
              {
                layer: 'benue_nassarawa_border',
                opacity: 0,
                duration: 3000
              },
              {
                layer: 'benue_nassarawa_border2',
                opacity: 0,
                duration: 3000
              },
              {
                layer: 'nasarawa_attacks_label',
                opacity: 0,
                duration: 3000
              },
              {
                layer: 'nasarawa-attacks-april',
                opacity: 0,
                duration: 3000
              },
              //{
              //  layer: 'nasarawa_attacks',
              //  opacity: 0,
              //  duration: 3000
              //},
              //{
              //  layer: 'nasarawa_attacks2',
              //  opacity: 0,
              //  duration: 3000
              //},
              //{
              //  layer: 'nasarawa_attacks3',
              //  opacity: 0,
              //  duration: 3000
              //},
              {
                layer: 'nigeria_states_labels',
                opacity: 0,
                duration: 3000
              },
              {
                layer: '3d_labels',
                opacity: 0,
                duration: 3000
              }
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'satimg2',
            alignment: 'right',
            hidden: false,
            title: 'Nasarawa’s Deadly Escalation',
            image: '',
            description: 'From January to June 2018, over 260 people were killed in several incidents, mostly in Nasarawa’s southern zone covering Doma, Awe, Obi and Keana local government areas. In May 2018, federal authorities deployed a military force, Operation Whirl Stroke, to Nasarawa and three additional states. The violence has ebbed for now in Nasarawa. (Data: <a href="http://www.acleddata.com/" target="_blank">ACLED</a>)<h4>Total fatalities - violence in Nasarawa (January-June 2018)</h4><img style="width: auto !important;" src="images/fatalities_vertical_3.png" />',
            location: {
                center: [8.348450, 8.645048],
                zoom: 8,
                pitch: 28.26,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'nasarawa-attacks-april',
                opacity: .6,
                duration: 2000
              },
              //{
              //  layer: 'nasarawa_attacks',
              //  opacity: 1,
              //  duration: 2000
              //},
              //{
              //  layer: 'nasarawa_attacks2',
              //  opacity: 1,
              //  duration: 6000
              //},
              //{
              //  layer: 'nasarawa_attacks3',
              //  opacity: 1,
              //  duration: 10000
              //},
              {
                layer: 'benue_nassarawa_border',
                opacity: 1,
                duration: 3000
              },
              {
                layer: 'benue_nassarawa_border2',
                opacity: 1,
                duration: 3000
              },
              {
                layer: 'country-label',
                opacity: 0,
                duration: 3000
              },
              {
                layer: 'nigeria_federal',
                opacity: 0,
                duration: 2000
              },
              //{
              //  layer: 'nasarawa_attacks_label',
              //  opacity: 1,
              //  duration: 13000
              //},
              {
                layer: 'nigeria_states_labels',
                opacity: 1,
                duration: 3000
              }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'ranches1',
            alignment: 'right',
            hidden: false,
            title: 'Planned Ranches - Nasarawa',
            image: '',
            description: 'To curb the movement of cattle, the federal government’s National Livestock Transformation Plan seeks to shift Nigeria’s livestock sector from free-roaming herding to systems that concentrate cattle in ranches and grazing reserves. Nasarawa is one of seven conflict-prone states designated to pilot this approach. As shown, many of Nasarawa’s proposed ranches are located near areas that have previously experienced farmer-herder violence.<br /><h4><span class="legend-key" style="background-color: rgb(22, 137, 16);"></span>&nbsp;&nbsp;PROPOSED GRAZING RESERVES</h4>',
            location: {
              center: [8.348450, 8.645048],
              zoom: 8,
              pitch: 28.26,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: '3d_labels',
                opacity: 0,
                duration: 1000
              },
              {
                layer: 'pilot_states',
                opacity: 0,
                duration: 2000
              },
              {
                layer: 'benue_nassarawa_border',
                opacity: 1,
                duration: 3000
              },
              {
                layer: 'benue_nassarawa_border2',
                opacity: 1,
                duration: 3000
              },
              {
                layer: 'nasarawa-reserves',
                opacity: 1,
                duration: 2000
              }
            ],
            onChapterExit: [
              {
                layer: 'nasarawa-reserves',
                opacity: 0,
                duration: 3000
              },
              {
                layer: 'nasarawa-attacks-april',
                opacity: 0,
                duration: 3000
              },
              //{
              //  layer: 'nasarawa_attacks',
              //  opacity: 0,
              //  duration: 3000
              //},
              //{
              //  layer: 'nasarawa_attacks2',
              //  opacity: 0,
              //  duration: 3000
              //},
              //{
              //  layer: 'nasarawa_attacks3',
              //  opacity: 0,
              //  duration: 3000
              //},
              //{
              //  layer: 'nasarawa_attacks_label',
              //  opacity: 0,
              //  duration: 3000
              //},
              {
                layer: '3d_labels',
                opacity: 0,
                duration: 3000
              }
            ]
        },
        {
            id: 'ranches2',
            alignment: 'right',
            hidden: false,
            title: 'Planned Ranches - Nigeria',
            image: '',
            description: 'Nasarawa plans to build ranches on seven grazing reserves to pilot the transition to stationary ranching. Many other states have signalled interest in the federal government’s plan. But that plan is already behind schedule. Only three pilot states have begun demarcating reserves to be made into ranches. Nor it is clear how many pastoralists want to break with their traditions and move to ranching or concentrate in grazing reserves. There are concerns about the feasibility of the plan’s proposed timeline, which foresees wide implementation by 2028.<br /><br /><h4><span class="legend-key" style="background-color: rgb(22, 137, 16);"></span>&nbsp;&nbsp;PROPOSED GRAZING RESERVES</h4>',
            location: {
              center: [13.398643, 8.313016],
              zoom: 5.50,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'nasarawa-reserves',
                opacity: 1,
                duration: 2000
              },
              {
                layer: 'pilot_states',
                opacity: 1,
                duration: 2000
              },
              {
                layer: 'nigeria_states_labels',
                opacity: 0,
                duration: 3000
              },
              {
                layer: 'benue_nassarawa_border',
                opacity: 0,
                duration: 3000
              },
              {
                layer: 'benue_nassarawa_border2',
                opacity: 0,
                duration: 3000
              },
              {
                layer: 'nigeria-pilot-states',
                opacity: 0.4,
                duration: 2000
              }
            ],
            onChapterExit: [
              {
                layer: 'nasarawa_attacks',
                opacity: 0,
                duration: 3000
              },
              {
                layer: 'nasarawa_attacks2',
                opacity: 0,
                duration: 3000
              },
              {
                layer: 'nasarawa_attacks3',
                opacity: 0,
                duration: 3000
              },
              {
                layer: 'nasarawa_attacks_label',
                opacity: 0,
                duration: 3000
              },
              {
                layer: 'nigeria-pilot-states',
                opacity: 0,
                duration: 2000
              },
              {
                layer: 'pilot_states',
                opacity: 0,
                duration: 2000
              },
              {
                layer: 'nigeria_states_labels',
                opacity: 0,
                duration: 3000
              }
            ]
        },
        {
            id: 'nigeria_wri',
            alignment: 'right',
            hidden: false,
            title: 'Reducing Risks of Violence',
            image: '',
            description: 'The federal government’s plan is a positive step but will not by itself end risks of farmer-herder violence exacerbated by climate change &dash; even if fully implemented. Planned ranch and grazing reserve locations may themselves be vulnerable to climate-related threats, such as growing water scarcity, over coming decades. The federal government should ensure that all states participating in the livestock transformation plan adopt measures to address climate change’s impact and consider future climate projections in designating locations for ranches and grazing reserves. (Data: WRI)<h4>2030 forecast - seasonal variability, water supply</h4><div id="wri-values" class="row labels"><div class="label">< Low</div><div class="label"> </div>  <div class="label">High ></div></div><div class="wri-legend-colors"></div>',
            location: {
              center: [13.398643, 8.313016],
              zoom: 5.50,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'wri_nigeria',
                opacity: 1,
                duration: 3000
              },
              {
                layer: 'satellite',
                opacity: 0,
                duration: 3000
              },
              {
                layer: 'nigeria_federal',
                opacity: 0,
                duration: 2000
              }
            ],
            onChapterExit: [
              {
                layer: 'satellite',
                opacity: 0,
                duration: 3000
              },
              {
                layer: 'nasarawa-reserves',
                opacity: 0,
                duration: 3000
              },
              {
                layer: 'nigeria_states_labels',
                opacity: 0,
                duration: 3000
              },
              {
                layer: 'benue_nassarawa_border',
                opacity: 0,
                duration: 3000
              },
              {
                layer: 'benue_nassarawa_border2',
                opacity: 0,
                duration: 3000
              },
              {
                layer: 'wri_nigeria',
                opacity: 0,
                duration: 3000
              }
            ]
        },
        {
            id: 'end',
            alignment: 'left',
            hidden: false,
            title: 'Recommendations',
            image: 'images/farmer_herder.jpg',
            description: 'Crisis Group recommends that Nigerian authorities prioritise securing the funds they will need to implement the National Livestock Transformation Plan, building capacity for livestock management, and improving communication to better explain the plan to those affected. These steps can help ensure the sustainability of this vital effort to address the drivers of farmer-herder violence. <br /><br />Read more of Crisis Group’s work on farmer-herder violence and its causes <a href="https://www.crisisgroup.org/africa/west-africa/nigeria/288-violence-nigerias-north-west-rolling-back-mayhem" target="_blank">here</a> and <a href="https://www.crisisgroup.org/africa/west-africa/nigeria/262-stopping-nigerias-spiralling-farmer-herder-violence" target="_blank">here</a>.',
            location: {
                center: [8.47235209, 11.89892624],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
              {
                layer: 'country-label',
                opacity: 1,
                duration: 3000
              },
              {
                  layer: 'nigeria_federal',
                  opacity: 0.3,
                  duration: 2000
              }
            ],
            onChapterExit: [
              {
                layer: 'country-label',
                opacity: 0,
                duration: 3000
              }
            ]
        }
    ]
};
