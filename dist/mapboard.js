(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue'), require('vuex'), require('@cityofphiladelphia/phila-vue-datafetch'), require('@cityofphiladelphia/phila-vue-mapping'), require('@cityofphiladelphia/phila-vue-comps'), require('leaflet'), require('axios'), require('@fortawesome/fontawesome-svg-core'), require('@fortawesome/vue-fontawesome')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue', 'vuex', '@cityofphiladelphia/phila-vue-datafetch', '@cityofphiladelphia/phila-vue-mapping', '@cityofphiladelphia/phila-vue-comps', 'leaflet', 'axios', '@fortawesome/fontawesome-svg-core', '@fortawesome/vue-fontawesome'], factory) :
  (factory((global.mapboard = {}),global.Vue,global.Vuex,global.philaVueDatafetch,global.philaVueMapping,global.philaVueComps,global.L,global.axios,global.fontawesomeSvgCore,global.vueFontAwesome));
}(this, (function (exports,Vue,Vuex,philaVueDatafetch,philaVueMapping,philaVueComps,leaflet,axios,fontawesomeSvgCore,vueFontawesome) { 'use strict';

  Vue = Vue && Vue.hasOwnProperty('default') ? Vue['default'] : Vue;
  Vuex = Vuex && Vuex.hasOwnProperty('default') ? Vuex['default'] : Vuex;
  philaVueDatafetch = philaVueDatafetch && philaVueDatafetch.hasOwnProperty('default') ? philaVueDatafetch['default'] : philaVueDatafetch;
  var philaVueMapping__default = 'default' in philaVueMapping ? philaVueMapping['default'] : philaVueMapping;
  var philaVueComps__default = 'default' in philaVueComps ? philaVueComps['default'] : philaVueComps;
  axios = axios && axios.hasOwnProperty('default') ? axios['default'] : axios;

  function isMobileDevice () {
    var mobileOrTabletRegexA = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i;
    var mobileOrTabletRegexB = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;

    // get the user agent and test against both regex patterns
    var userAgent = (navigator.userAgent || navigator.vendor || window.opera || '');
    var isMobileOrTablet = (mobileOrTabletRegexA.test(userAgent) ||
                              mobileOrTabletRegexB.test(userAgent.substr(0,4)));

    return isMobileOrTablet;
  }

  // http://stackoverflow.com/a/37164538/676001

  // helper to verify that an item is an object
  function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item) && item !== null);
  }
  // merges n objects, deeply, immutably
  function mergeDeep(target, source) {
    var output = Object.assign({}, target);
    if (isObject(target) && isObject(source)) {
      Object.keys(source).forEach(function (key) {
        var obj, obj$1;

        if (isObject(source[key])) {
          if (!(key in target))
            { Object.assign(output, ( obj = {}, obj[key] = source[key], obj)); }
          else
            { output[key] = mergeDeep(target[key], source[key]); }
        } else {
          Object.assign(output, ( obj$1 = {}, obj$1[key] = source[key], obj$1));
        }
      });
    }
    return output;
  }

  var pvdStore = philaVueDatafetch.pvdStore;
  var pvmStore = philaVueMapping__default.pvmStore;
  var pvcStore = philaVueComps__default.pvcStore;

  // when you load vuex from a script tag this seems to happen automatically
  Vue.use(Vuex);

  // this grabs horizontal table ids from an array of topic components,
  // recursively
  function getHorizontalTableIdsFromComps(comps) {
    if ( comps === void 0 ) comps = [];

    // console.log('getHorizontalTableIdsFromComps is running, comps:', comps);

    var tableIds = [];

    for (var i = 0, list = comps; i < list.length; i += 1) {
      var comp = list[i];

      var options = comp.options || {};
      var innerComps = options.components || options.tables;

      // if this is a "group" component, recurse
      if (innerComps) {
        var innerTableIds = getHorizontalTableIdsFromComps(innerComps);
        tableIds = tableIds.concat(innerTableIds);
        continue;
      }

      // skip comps that aren't horizontal tables
      if (comp.type !== 'horizontal-table') {
        continue;
      }

      var tableId = comp._id;

      tableIds.push(tableId);
    }

    return tableIds;
  }

  // this makes the empty filtered data object given a list of topics.
  function createFilteredData(config) {
    var topics = config.topics;
    var tableIds = [];

    for (var i = 0, list = topics; i < list.length; i += 1) {
      var topic = list[i];

      var comps = topic.components;
      var compTableIds = getHorizontalTableIdsFromComps(comps);
      tableIds = tableIds.concat(compTableIds);
    }

    // console.log('createFilteredData is running, tableIds:', tableIds);

    // const filteredData = tableIds.reduce((acc, tableId) => {
    //   acc[tableId] = [];
    //   return acc;
    // }, {});

    var filteredData = {};
    for (var index=0; index < tableIds.length; index++) {
      filteredData[tableIds[index]] = [];
    }

    return filteredData;
  }

  // this grabs table group ids from an array of topic components
  function getHorizontalTableGroupIdsFromComps(comps) {
    if ( comps === void 0 ) comps = [];

    // console.log('getHorizontalTableGroupIdsFromComps is running, comps:', comps);
    var tableGroupId;

    for (var i = 0, list = comps; i < list.length; i += 1) {
      var comp = list[i];

      var options = comp.options || {};
      var innerComps = options.components || options.tables;

      // console.log('getHorizontalTableGroupIdsFromComps, comp:', comp);

      // if this is a "group" component, recurse
      if (!innerComps) {
        continue;
      }

      // console.log('getTableGroupIdsFromComps, comp.type:', comp.type);

      // skip comps that aren't horizontal tables
      if (comp.type !== 'horizontal-table-group') {
        continue;
      }

      tableGroupId = comp._id;
      // console.log('getHorizontalTableGroupIdsFromComps, tableGroupId:', tableGroupId);
    }

    return tableGroupId;
  }

  // this makes the empty horizontalTableGroups object given a list of topics.
  function createHorizontalTableGroups(config) {
    var topics = config.topics;

    var tableGroupIds = [];

    for (var i = 0, list = topics; i < list.length; i += 1) {
      var topic = list[i];

      var comps = topic.components;
      var compTableGroupId = getHorizontalTableGroupIdsFromComps(comps);
      if (compTableGroupId) { tableGroupIds.push(compTableGroupId); }
    }
    // console.log('createHorizontalTableGroups is running, config:', config, 'tableGroupIds:', tableGroupIds);

    var horizontalTableGroups = {};

    for (var i$1 = 0, list$1 = tableGroupIds; i$1 < list$1.length; i$1 += 1) {
      var tableGroupId = list$1[i$1];

      horizontalTableGroups[tableGroupId] = {
        activeTable: null,
        activeTableId: null
      };
    }
    return horizontalTableGroups;
  }

  function createStore(config) {
    var sources = pvdStore.createSources(config);
    var parcels = pvdStore.createParcels(config);

    var initialState = {
      isMobileOrTablet: isMobileDevice(),
      fullScreen: {
        mapOnly: false,
        topicsOnly: false,
      },
      fullScreenMapEnabled: false,
      // fullScreenTopicsEnabled: false,
      candidates: [],
      addressEntered: null,
      parcels: parcels,
      sources: sources,
      horizontalTables: {
        // table id => filtered rows
        filteredData: createFilteredData(config),
      },
      horizontalTableGroups: createHorizontalTableGroups(config),
      activeFeature: {
        featureId: null,
        tableId: null
      },
      appData: {
        propertyBalance: 0,
      },
      modals: {
        keys: config.modals,
        open: '',
      },
      map: {}
    };

    if (config.map.initialImagery) {
      initialState.map.imagery = config.map.initialImagery;
    }

    var mb = {
      state: initialState,
      getters: {
        visibleTableIds: function visibleTableIds(state) {
          // get active topic
          var activeTopic = state.activeTopic;

          if (!activeTopic) {
            return [];
          }

          // get horizontal table ids for that topic
          var activeTopicConfig = (config.topics.filter(function (topic) { return topic.key === activeTopic; }) || [])[0];
          var comps = activeTopicConfig.components;

          var compTableGroup = getHorizontalTableGroupIdsFromComps(comps);
          if (compTableGroup) {
            // even though there is only 1 value, it has to be in array form in the state
            var array = [];
            array.push(state.horizontalTableGroups[compTableGroup].activeTableId);
            return array;
          } else {
            var compTables = getHorizontalTableIdsFromComps(comps);
            return compTables;
          }
        }
      },
      mutations: {

        setIsMobileOrTablet: function setIsMobileOrTablet(state, payload) {
          state.isMobileOrTablet = payload;
        },
        setMapOnly: function setMapOnly(state, payload) {
          state.fullScreen.mapOnly = payload;
        },
        setTopicsOnly: function setTopicsOnly(state, payload) {
          state.fullScreen.topicsOnly = payload;
        },
        setFullScreenMapEnabled: function setFullScreenMapEnabled(state, payload) {
          state.fullScreenMapEnabled = payload;
        },
        // setFullScreenTopicsEnabled(state, payload) {
        //   state.fullScreenTopicsEnabled = payload;
        // },
        setLocation: function setLocation(state, payload) {
          state.map.location.lat = payload.lat;
          state.map.location.lng = payload.lng;
        },
        setWatchPositionOn: function setWatchPositionOn(state, payload) {
          state.map.watchPositionOn = payload;
        },

        setHorizontalTableGroupActiveTable: function setHorizontalTableGroupActiveTable(state, payload) {
          // console.log('setHorizontalTableGroupActiveTable, payload:', payload);
          state.horizontalTableGroups[payload.tableGroupId].activeTableId = payload.activeTableId;
          state.horizontalTableGroups[payload.tableGroupId].activeTable = payload.activeTable;
        },
        setHorizontalTableFilteredData: function setHorizontalTableFilteredData(state, payload) {
          var tableId = payload.tableId;
          var data = payload.data;

          // check for not-null table id
          if (!tableId) { return; }

          state.horizontalTables.filteredData[tableId] = data;
        },

        setMapFilters: function setMapFilters(state, payload) {
          state.map.filters = payload;
        },

        setMap: function setMap(state, payload) {
          state.map.map = payload.map;
        },


        setMapBounds: function setMapBounds(state, payload) {
          // const { northEast, southWest } = payload || {};
          // state.map.bounds.northEast = northEast;
          // state.map.bounds.southWest = southWest;
          state.map.bounds = payload;
        },
        setMapBoundsBasedOnShape: function setMapBoundsBasedOnShape(state, payload) {
          state.map.boundsBasedOnShape = payload;
        },
        setActiveParcel: function setActiveParcel(state, payload) {
          // console.log('store setActiveParcel:', payload)
          var ref = payload || {};
          var parcelLayer = ref.parcelLayer;
          var activeParcel = ref.activeParcel;
          var activeAddress = ref.activeAddress;
          var activeMapreg = ref.activeMapreg;
          state.parcels[parcelLayer].activeParcel = activeParcel;
          state.parcels[parcelLayer].activeAddress = activeAddress;
          state.parcels[parcelLayer].activeMapreg = activeMapreg;
        },

        setActiveFeature: function setActiveFeature(state, payload) {
          // console.log('store setActiveFeature is running');
          var ref = payload || {};
          var featureId = ref.featureId;
          var tableId = ref.tableId;
          var nextActiveFeature = { featureId: featureId, tableId: tableId };
          state.activeFeature = nextActiveFeature;
        },

        setImageOverlay: function setImageOverlay(state, payload) {
          state.map.imageOverlay = payload;
        },
        setImageOverlayOpacity: function setImageOverlayOpacity(state, payload) {
          state.map.imageOverlayOpacity = payload;
        },
        setCandidates: function setCandidates(state, payload) {
          state.candidates = payload;
        },
        setAddressEntered: function setAddressEntered(state, payload) {
          state.addressEntered = payload;
        },

        setPropertyBalance: function setPropertyBalance(state, payload) {
          state.appData.propertyBalance = payload;
        },
        setDidToggleModal: function setDidToggleModal(state, name) {
          // console.log('setDidToggleModal, name:', name, 'open:', open);
          // console.log('setDidToggleModal, name:', name);
          // state.modals[name].open = open === null ? !state.modals[name].open : open
          state.modals.open = name;
        },
      }
    };

    var mergeStore = mergeDeep(pvdStore.store, pvmStore);
    mergeStore = mergeDeep(mergeStore, pvcStore);
    mergeStore = mergeDeep(mergeStore, mb);
    // let mergeStore = mergeDeep(mb, pvdStore.store);
    // mergeStore = mergeDeep(mergeStore, pvmStore);
    // mergeStore = mergeDeep(mergeStore, pvcStore);

    // reset the map center and zoom based on the config
    mergeStore.state.map.center = config.map.center;
    mergeStore.state.map.zoom = config.map.zoom;
    mergeStore.state.pictometry.map.center = config.map.center;
    mergeStore.state.pictometry.map.zoom = config.map.zoom;
    // mergeStore.state.pictometry.enabled = config.pictometry.enabled;
    // mergeStore.state.cyclomedia.enabled = config.cyclomedia.enabled;

    // console.log('mergeStore:', mergeStore);

    // TODO standardize how payloads are passed around/handled
    return new Vuex.Store({
      state: mergeStore.state,
      getters: mergeStore.getters,
      mutations: mergeStore.mutations
    });
  }

  // shout out to airyland
  // https://github.com/airyland/vue-config/blob/master/index.js

  function configMixin (Vue$$1, config) {
    Vue$$1.mixin({
      created: function created() {
        this.$config = config;
      }
    });
  }

  (function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" /*don't highlight any form elements*/ input[data-v-c37cf8b6]:focus, select[data-v-c37cf8b6]:focus, textarea[data-v-c37cf8b6]:focus, button[data-v-c37cf8b6]:focus { outline: none; } /* standards applies padding to buttons, which causes some weirdness with buttons on the map panel. override here. */ button[data-v-c37cf8b6] { padding: inherit; } .mb-panel-topics[data-v-c37cf8b6] { position: relative; } .address-header[data-v-c37cf8b6] { background: #daedfe; color: #0f4d90; /*this keeps the box shadow over the scrollable part of the panel*/ position: relative; z-index: 1; -webkit-box-shadow: 0px 5px 7px -2px rgba(0,0,0,0.18); -moz-box-shadow: 0px 5px 7px -2px rgba(0,0,0,0.18); box-shadow: 0px 5px 7px -2px rgba(0,0,0,0.18); margin-bottom: -5px !important; display: inline-block; } .address-header-line-1[data-v-c37cf8b6] { margin-bottom: 0; margin-top: 0; padding-top: 0px !important; padding-bottom: 0px !important; padding-right: 8px !important; padding-left: 8px !important; } .address-header-line-2[data-v-c37cf8b6] { padding: 0px; } .address-header-line-3[data-v-c37cf8b6] { padding: 0px; } .address-container[data-v-c37cf8b6] { display: flex; flex-direction: column; justify-content: center; } .address-input-container[data-v-c37cf8b6] { display: flex; flex-direction: column; justify-content: center; } .topics-container[data-v-c37cf8b6] { padding: 26px; position: relative; overflow-x: hidden; } .default-address-text[data-v-c37cf8b6] { font-size: 30px; line-height: 26px; font-family: 'Montserrat', 'Tahoma', sans-serif; padding-top: 0px !important; padding-bottom: 0px !important; padding-right: 8px !important; padding-left: 8px !important; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

  var TopicPanel = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:'mb-panel-topics cell ' + this.topicPanelContainerClass,attrs:{"id":"topic-panel-container"}},[(!this.fullScreenTopicsOnly)?_vm._m(0):_vm._e(),_vm._v(" "),(this.shouldShowAddressHeader)?_c('div',{staticClass:"address-header cell small-24 medium-24"},[_c('div',{class:'address-container columns ' + this.addressContainerClass,style:(this.addressContainerStyle)},[(!this.address)?_c('div',{staticClass:"default-address-text",style:(this.defaultAddressTextPlaceholderStyle)},[_vm._v(" "+_vm._s(this.$config.defaultAddressTextPlaceholder.text)+" ")]):_vm._e(),_vm._v(" "),_c('h1',{staticClass:"address-header-line-1"},[(!this.fullScreenTopicsOnly)?_c('font-awesome-icon',{attrs:{"icon":"map-marker-alt"}}):_vm._e(),_vm._v(" "+_vm._s(_vm.address)+" ")],1),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(this.geocode),expression:"this.geocode"}],staticClass:"address-header-line-2"},[_vm._v(" PHILADELPHIA, PA "+_vm._s(_vm.zipCode)+" ")]),_vm._v(" "),(this.addressHeaderAdditionalInfo)?_c('any-header',{attrs:{"options":this.addressHeaderAdditionalHeaderOptions,"slots":this.addressHeaderAdditionalHeaderSlots}}):_vm._e()],1),_vm._v(" "),(this.fullScreenTopicsEnabled && !this.stacked || this.fullScreenTopicsOnly)?_c('div',{staticClass:"address-input-container columns small-24 medium-12 large-12",style:(this.addressInputContainerStyle)},[_c('address-input',{attrs:{"widthFromConfig":this.addressInputWidth,"placeholder":this.addressInputPlaceholder}},[(this.addressAutocompleteEnabled)?_c('address-candidate-list',{attrs:{"slot":"address-candidates-slot","widthFromConfig":this.addressInputWidth},slot:"address-candidates-slot"}):_vm._e()],1)],1):_vm._e()]):_vm._e(),_vm._v(" "),(_vm.shouldShowGreeting)?_c('div',{staticClass:"topics-container cell medium-cell-block-y",style:(_vm.topicsContainerStyle)},[_c('greeting',{directives:[{name:"show",rawName:"v-show",value:(_vm.shouldShowGreeting),expression:"shouldShowGreeting"}],attrs:{"message":_vm.greetingText,"options":_vm.greetingOptions}})],1):_vm._e(),_vm._v(" "),(!_vm.shouldShowGreeting)?_c('div',{staticClass:"topic-panel-content"},[_c('div',{staticClass:"topics-container cell medium-cell-block-y",style:(_vm.topicsContainerStyle)},[_c('topic-component-group',{attrs:{"topic-components":this.$config.components}})],1)]):_vm._e()],1)},staticRenderFns: [function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('full-screen-topics-toggle-tab')}],_scopeId: 'data-v-c37cf8b6',
    components: {
      Greeting: philaVueComps.Greeting,
      TopicComponentGroup: philaVueComps.TopicComponentGroup,
      Topic: philaVueComps.Topic,
      AnyHeader: philaVueComps.AnyHeader,
      AddressInput: philaVueComps.AddressInput,
      AddressCandidateList: philaVueComps.AddressCandidateList,
      FullScreenTopicsToggleTab: philaVueComps.FullScreenTopicsToggleTab,
    },
    data: function data() {
      var data = {
        defaultAddressTextPlaceholderStyle: {},
        topicsContainerStyle: {
          'overflow-y': 'auto',
          'height': '100px',
          'min-height': '100px',
        },
        addressContainerStyle: {
          'height': '100%',
          'align-items': 'flex-start',
          'padding-left': '20px',
          'padding-top': '20px',
          'padding-bottom': '20px',
        },
        addressInputContainerStyle: {
          'height': '100%',
          'align-items': 'center',
          'padding-top': '10px',
          'padding-bottom': '10px',
        },
        stacked: false,
      };
      return data;
    },
    // created() {
    //   console.log('TopicPanel created, this.$config:', this.$config);
    //   TopicComponentGroup.components.PropertyCallout = this.$config.customComps.propertyCallout;
    //   console.log('TopicPanel created, TopicComponentGroup:', TopicComponentGroup);
    // },
    mounted: function mounted() {
      window.addEventListener('click', this.closeAddressCandidateList);
      window.addEventListener('resize', this.handleWindowResize);
      this.handleWindowResize(25);
    },
    watch: {
      geocodeStatus: function geocodeStatus() {
        this.handleWindowResize();
      }
    },
    computed: {
      greetingText: function greetingText() {
        return this.$config.greeting.message;
      },
      greetingOptions: function greetingOptions() {
        return this.$config.greeting.options;
      },
      shouldShowAddressHeader: function shouldShowAddressHeader() {
        if (this.fullScreenTopicsOnly || this.shouldShowGreeting === false) {
          return true;
        } else {
          return false;
        }
      },
      // shouldShowAddressHeaderAdditionalInfo() {
      //   if (this.addressHeaderAdditionalHeaderOptions.headerType) {
      //     return 'anyHeader'
      //   } else if (this.addressHeaderAdditionalHeaderOptions && !this.addressHeaderAdditionalHeaderOptions.headerType) {
      //     return ''
      //   }
      // }
      addressHeaderAdditionalHeaderOptions: function addressHeaderAdditionalHeaderOptions() {
        if (this.$config.addressHeaderAdditionalInfo) {
          var ahai = this.$config.addressHeaderAdditionalInfo;
          if (ahai.options) {
            if (!ahai.options.headerType) {
              ahai.options.headerType = 'h4';
            }
            return ahai.options;
          }
        }
      },
      addressHeaderAdditionalHeaderSlots: function addressHeaderAdditionalHeaderSlots() {
        return {
          text: this.addressHeaderAdditionalInfo
        }
      },
      addressHeaderAdditionalInfo: function addressHeaderAdditionalInfo() {
        if (this.$config.addressHeaderAdditionalInfo) {
          var geocode = this.geocode;
          if (!geocode) { return null; }
          var ahai = this.$config.addressHeaderAdditionalInfo;
          var returned = [];
          if (ahai.preText) {
            returned.push(ahai.preText);
          }
          returned.push(geocode.properties[ahai.data]);
          console.log('returned:', returned);
          return returned.join(' ');
        }
      },
      inputAlign: function inputAlign() {
        if (this.$config.addressInput) {
          if (this.$config.addressInput.position) {
            var position = this.$config.addressInput.position;
            switch(position) {
              case 'left':
              return 'flex-start';
              case 'right':
              return 'flex-end';
              case 'center':
              return 'center';
            }
          } else {
            return 'flex-start';
          }
        } else {
          return 'flex-start';
        }
      },
      addressInputWidth: function addressInputWidth() {
        if (this.$config.addressInput) {
          return this.$config.addressInput.width;
        } else {
          return 415;
        }
      },
      addressInputPlaceholder: function addressInputPlaceholder() {
        if (this.$config.addressInput) {
          return this.$config.addressInput.placeholder;
        } else {
          return null
        }
      },
      addressAutocompleteEnabled: function addressAutocompleteEnabled() {
        if (this.$config.addressInput) {
          if (this.$config.addressInput.autocompleteEnabled === true) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      },
      fullScreenMapEnabled: function fullScreenMapEnabled() {
        return this.$store.state.fullScreenMapEnabled;
      },
      fullScreenTopicsEnabled: function fullScreenTopicsEnabled() {
        return this.$store.state.fullScreenTopicsEnabled;
      },
      fullScreenTopicsOnly: function fullScreenTopicsOnly() {
        return this.$store.state.fullScreen.topicsOnly;
      },
      topicPanelContainerClass: function topicPanelContainerClass() {
        if (this.fullScreenTopicsEnabled || this.fullScreenTopicsOnly) {
          return 'medium-24 small-order-2 medium-order-1';
        } else if (this.fullScreenMapEnabled) {
          return 'medium-1 small-order-2 medium-order-1';
        } else {
          return 'medium-12 small-order-2 medium-order-1';
        }
      },
      addressContainerClass: function addressContainerClass() {
        if (this.fullScreenTopicsEnabled || this.fullScreenTopicsOnly) {
          return 'small-24 medium-12 large-12';
        } else {
          return 'small-24';
        }
      },
      geocode: function geocode() {
        return this.$store.state.geocode.data;
      },
      geocodeStatus: function geocodeStatus() {
        return this.$store.state.geocode.status;
      },
      dorParcels: function dorParcels() {
        return this.$store.state.parcels.dor.data.length > 0;
      },
      shouldShowGreeting: function shouldShowGreeting() {
        return !(this.geocode || this.dorParcels);
      },
      // this returns the address shown in the address header
      address: function address() {
        var geocode = this.geocode;
        var dorParcels = this.$store.state.parcels.dor.data;
        var activeDorAddress = this.$store.state.parcels.dor.activeAddress;
        var address;
        // if (this.$config.defaultAddressTextPlaceholder) {
        //   address = this.$config.defaultAddressTextPlaceholder.text;
        // }

        if (geocode) {
          // TODO make this not ais-specific
          // REVIEW what's the difference between these two?
          var addressA = geocode.properties.street_address;
          var addressB = geocode.street_address;

          address = addressA || addressB;

        // a DOR address might be found even if there is no geocode
        } else if (activeDorAddress) {
          address = activeDorAddress;
        }

        return address;
      },
      zipCode: function zipCode() {
        var geocode = this.geocode;
        if (!geocode) { return null; }
        var zipCode = geocode.properties.zip_code;
        var zip4 = geocode.properties.zip_4;
        var parts = [zipCode];
        if (zip4) { parts.push(zip4); }
        return parts.join('-');
      },
    },
    methods: {
      closeAddressCandidateList: function closeAddressCandidateList() {
        this.$store.state.shouldShowAddressCandidateList = false;
      },
      handleWindowResize: function handleWindowResize(pixelAdjustment) {
        // this is called to run when:
        // 1 - TopicPanel.vue mounted
        // 2 - geocodeStatus change
        // 3 - any resizing of the window

        // const windowHeight = $(window).height();
        var windowHeight = window.innerHeight;
        // const siteHeaderHeightNum = parseInt(window.getComputedStyle(document.getElementsByClassName('site-header')[0]).getPropertyValue('height').replace('px', ''));
        var siteHeaderHeightNum = parseInt(document.getElementsByClassName('site-header')[0].getBoundingClientRect().height);
        // const appFooterHeightNum = parseInt(window.getComputedStyle(document.getElementsByClassName('app-footer')[0]).getPropertyValue('height').replace('px', ''));
        var appFooterHeightNum = parseInt(document.getElementsByClassName('app-footer')[0].getBoundingClientRect().height);
        var topicsHeight;

        if (this.shouldShowAddressHeader) {
          if (document.getElementsByClassName('address-header')[0]) {
            // const addressHeaderHeightNum = parseInt(window.getComputedStyle(document.getElementsByClassName('address-header')[0]).getPropertyValue('height').replace('px', ''));
            var addressHeaderHeightNum = parseInt(document.getElementsByClassName('address-header')[0].getBoundingClientRect().height);
            topicsHeight = windowHeight - siteHeaderHeightNum - appFooterHeightNum - addressHeaderHeightNum;
            // console.log('handleWindowResize shouldShowAddressHeader and it was found, window-height:', windowHeight, 'SiteHeaderHeight:', siteHeaderHeightNum, 'addressHeaderHeight:', addressHeaderHeightNum, 'appFooterHeight:', appFooterHeightNum, 'topicsHeight:', topicsHeight);
            if (typeof pixelAdjustment === 'number') {
              // console.log('handleWindowResize if pixelAdjustment is true, window-height:', windowHeight, 'SiteHeaderHeight:', siteHeaderHeightNum, 'addressHeaderHeight:', addressHeaderHeightNum, 'appFooterHeight:', appFooterHeightNum, 'topicsHeight:', topicsHeight, 'pixelAdjustment:', pixelAdjustment);
              topicsHeight = topicsHeight - pixelAdjustment;
            }
          } else {
            topicsHeight = windowHeight - siteHeaderHeightNum - appFooterHeightNum - 103;
            // console.log('handleWindowResize shouldShowAddressHeader but it was not found so it is using the hardcoded 103, window-height:', windowHeight, 'SiteHeaderHeight:', siteHeaderHeightNum, 'appFooterHeight:', appFooterHeightNum, 'topicsHeight:', topicsHeight);
          }
        } else {
          topicsHeight = windowHeight - siteHeaderHeightNum - appFooterHeightNum;
          // console.log('handleWindowResize shouldShowAddressHeader is NOT true, window-height:', windowHeight, 'SiteHeaderHeight:', siteHeaderHeightNum, 'appFooterHeight:', appFooterHeightNum, 'topicsHeight:', topicsHeight);
        }

        // if ($(window).width() >= 750) {
        if (window.innerWidth >= 750) {
          this.stacked = false;
          if (this.$config.defaultAddressTextPlaceholder) {
            this.defaultAddressTextPlaceholderStyle = this.$config.defaultAddressTextPlaceholder.wideStyle;
          }
          this.addressContainerStyle = {
            'height': '100%',
            'align-items': 'flex-start',
            'padding-left': '20px',
            'padding-top': '20px',
            'padding-bottom': '20px',
          };
          this.addressInputContainerStyle = {
            'height': '100%',
            'align-items': this.inputAlign,
            'padding-top': '30px',
            'padding-bottom': '30px',
          };
          this.topicsContainerStyle.height = topicsHeight.toString() + 'px';
          this.topicsContainerStyle['min-height'] = topicsHeight.toString() + 'px';
          this.topicsContainerStyle['overflow-y'] = 'auto';

        } else {
          this.stacked = true;
          if (this.$config.defaultAddressTextPlaceholder) {
            this.defaultAddressTextPlaceholderStyle = this.$config.defaultAddressTextPlaceholder.narrowStyle;
          }
          this.addressContainerStyle = {
            'height': 'auto',
            'align-items': 'center',
            'padding-left': '0px',
            'padding-top': '10px',
            'padding-bottom': '10px',
          };
          this.addressInputContainerStyle = {
            'height': 'auto',
            'align-items': 'center',
            'padding-top': '10px',
            'padding-bottom': '10px',
          };
          this.topicsContainerStyle.height = 'auto';
          this.topicsContainerStyle['min-height'] = topicsHeight.toString() + 'px';
          this.topicsContainerStyle['overflow-y'] = 'hidden';
        }
      }
    }
  };

  var markersMixin = {
    watch: {
      activeFeature: function activeFeature(nextActiveFeature, prevActiveFeature) {
        // console.log('WATCH active feature', prevActiveFeature, '=>', nextActiveFeature);

        var layerMap = this.$store.state.map.map._layers;
        var layers = Object.values(layerMap);

        var updateFeaturePrev,
            updateFeatureNext,
            tableId,
            featureIdPrev,
            featureIdNext,
            matchingLayerNext,
            matchingLayerPrev;

        if (prevActiveFeature && prevActiveFeature.tableId && prevActiveFeature.featureId) {
          updateFeaturePrev = prevActiveFeature;
          tableId = updateFeaturePrev.tableId;
          featureIdPrev = updateFeaturePrev.featureId;
          matchingLayerPrev = layers.filter(function (layer) {
            var options = layer.options || {};
            var data = options.data;
            if (!data) { return; }
            var layerFeatureId = data.featureId;
            var layerTableId = data.tableId;
            return layerFeatureId === featureIdPrev && layerTableId === tableId;
          })[0];
          this.updateMarkerFillColor(matchingLayerPrev);
        }

        if (nextActiveFeature && nextActiveFeature.tableId && nextActiveFeature.featureId) {
          updateFeatureNext = nextActiveFeature;
          tableId = updateFeatureNext.tableId;
          featureIdNext = updateFeatureNext.featureId;
          matchingLayerNext = layers.filter(function (layer) {
            var options = layer.options || {};
            var data = options.data;
            if (!data) { return; }
            var layerFeatureId = data.featureId;
            var layerTableId = data.tableId;
            return layerFeatureId === featureIdNext && layerTableId === tableId;
          })[0];
          this.updateMarkerFillColor(matchingLayerNext);
          this.bringMarkerToFront(matchingLayerNext);
        }

      },
    },
    computed: {
      locationMarker: function locationMarker() {
        var latlngArray = [this.$store.state.map.location.lat, this.$store.state.map.location.lng];
        var marker = {
          latlng: latlngArray,
          radius: 6,
          fillColor: '#ff3f3f',
          color: '#ff0000',
          weight: 1,
          opacity: 1,
          fillOpacity: 1.0
        };
        return marker;
      },

      // returns map markers as simple object with a geometry property, key,
      // and optional properties for symbology
      markersForAddress: function markersForAddress() {
        // console.log('markers-mixin.js markersForAddress computed is running');
        var markers = [];
        // geocoded address marker
        var geocodeGeom = this.geocodeGeom;
        if (this.identifyFeature === 'address-marker' && geocodeGeom) {
          var latlng = [].concat( geocodeGeom.coordinates ).reverse();
          var key = this.geocodeResult.properties.street_address;
          var color = '#2176d2';
          var markerType = 'geocode';
          var icon = {
            prefix: 'fas',
            icon: 'map-marker-alt',
            shadow: true,
            size: 50,
          };
          var addressMarker = {latlng: latlng, key: key, color: color, markerType: markerType, icon: icon};
          markers.push(addressMarker);
        }
        return markers;
      },

      markersForTopic: function markersForTopic() {
        // console.log('markers-mixin.js markersForTopic computed is running');
        var markers = [];

        // marker for topic from config
        var topicMarkers = this.activeTopicConfig.markersForTopic;
        if (topicMarkers) {
          var state = this.$store.state;
          var topicData = topicMarkers.data(state);
          if (topicData !== null) {
            // if (Array.isArray(topicData)) {
            //   for (let marker of topicData) {
            //     console.log('topicData marker:', marker);
            //     // }
            //     // if (path !== null && path !== undefined) {
            //     const latlng = [marker.lat, marker.lng];
            //     const key = marker.key;
            //     const color = marker.color || 'green';
            //     const markerType = 'overlay';
            //     const icon = marker.icon;
            //     const markerObject = {latlng, key, color, markerType, icon};
            //     markers.push(markerObject);
            //   }
            // } else {
              var latlng = [topicData[topicMarkers.lat], topicData[topicMarkers.lng]];
              var key = topicData[topicMarkers.key];
              var color = topicMarkers.color || 'green';
              var markerType = 'overlay';
              var icon = topicMarkers.icon;
              var markerObject = {latlng: latlng, key: key, color: color, markerType: markerType, icon: icon};
              markers.push(markerObject);
            // }
          }
        }
        return markers;
      },

      reactiveCircleMarkers: function reactiveCircleMarkers() {
        var filteredData = this.$store.state.horizontalTables.filteredData;
        // const filteredData = this.filteredData;
        var circleMarkers = [];

        // get visible tables based on active topic
        var tableIds = this.$store.getters.visibleTableIds;

        // console.log('computed circleMarkers is rerunning, filteredData:', filteredData, 'tableIds:', tableIds);

        for (var i$1 = 0, list$1 = tableIds; i$1 < list$1.length; i$1 += 1) {
          var tableId = list$1[i$1];

          var tableConfig = this.getConfigForTable(tableId) || {};
          // console.log('tableId:', tableId, 'tableConfig:', tableConfig);
          var mapOverlay = (tableConfig.options || {}).mapOverlay;

          if (!mapOverlay || mapOverlay.marker !== 'circle') {
            continue;
          }

          var items = filteredData[tableId];

          if (items.length < 1) {
            continue;
          }

          var style = mapOverlay.style;

          // go through rows
          for (var i = 0, list = items; i < list.length; i += 1) {
            // console.log('tableId', tableId)
            var item = list[i];

            var latlng = (void 0);

            // TODO - get geometry field name from config
            if (item.geometry) {
              var ref = item.geometry.coordinates;
              var x = ref[0];
              var y = ref[1];
              latlng = [y, x];
            } else if (item.lat) {
              latlng = [item.lat, item.lng];
              // if (item.point_x) {
              //   latlng = [item.point_y, item.point_x];
              // } else if (item.geocode_x) {
              //   latlng = [item.geocode_y, item.geocode_x];
              // }
            }

            // check for active feature TODO - bind style props to state
            var props = Object.assign({}, style);
            props.latlng = latlng;
            props.featureId = item._featureId;
            props.tableId = tableId;
            circleMarkers.push(props);
          }
        }

        return circleMarkers;
      },

      // returns geojson parcels to be rendered on the map along with
      // necessary props.
      geojsonParcels: function geojsonParcels() {
        // console.log('markers-mixin.js geojsonParcels computed is running');
        var features = [];

        var identifyFeature = this.identifyFeature;
        var activeParcelLayer = this.activeParcelLayer;

        // TODO - get pwd parcel and dor parcel into the config file
        // pwd parcel
        if (identifyFeature === 'pwd-parcel' && activeParcelLayer === 'pwd' && this.pwdParcel) {
          var props = {};
          props.geojson = this.pwdParcel;
          props.color = 'blue';
          props.fillColor = 'blue';
          props.weight = 2;
          props.opacity = 1;
          props.fillOpacity = 0.3;
          props.key = props.geojson.properties.PARCELID;
          features.push(props);

        // dor parcel
        } else if (identifyFeature === 'dor-parcel' && activeParcelLayer === 'dor') {
          var dorParcelFeatures = this.dorParcels.map(function (dorParcel) {
            var props = {};
            props.geojson = dorParcel;
            props.color = 'blue';
            props.fillColor = 'blue';
            props.weight = 2;
            props.opacity = 1;
            props.fillOpacity = 0.3;
            props.key = dorParcel.properties.OBJECTID;
            return props;
          });
          features.push.apply(features, dorParcelFeatures);
        }
        return features;
      },

      // returns other geojson from config
      geojsonForTopic: function geojsonForTopic() {
        var features = [];
        var topicGeojson = this.activeTopicConfig.geojsonForTopic;
        if (topicGeojson) {
          var state = this.$store.state;
          var topicData = topicGeojson.data(state);
          if (topicData !== null) {
            for (var i = 0, list = topicData; i < list.length; i += 1) {
              var geojson = list[i];

              var props = Object.assign({}, topicGeojson.style);
              props.key = geojson[topicGeojson.key];
              props.geojson = geojson;
              features.push(props);
            }
          }
        }
        return features;
      },

      // these geojson features will have mouseover and mouseout events,
      // for highlighting horizontal table rows
      reactiveGeojsonFeatures: function reactiveGeojsonFeatures() {
        var features = [];

        var filteredData = this.$store.state.horizontalTables.filteredData;
        // get visible tables based on active topic
        var tableIds = this.$store.getters.visibleTableIds;

        for (var i$1 = 0, list$1 = tableIds; i$1 < list$1.length; i$1 += 1) {
          var tableId = list$1[i$1];

          var tableConfig = this.getConfigForTable(tableId) || {};
          var mapOverlay = (tableConfig.options || {}).mapOverlay;

          if (!mapOverlay || mapOverlay.marker !== 'geojson') {
            continue;
          }

          var items = filteredData[tableId];

          if (items.length < 1) {
            continue;
          }

          var style = mapOverlay.style;
          items.push(tableId);

          // go through rows
          for (var i = 0, list = items; i < list.length; i += 1) {
            var item = list[i];

            var props = Object.assign({}, style);

            if(tableConfig.options.highlightOnMapMouseover === false){
                props.highlightOnMapMouseover = false;
               }

            props.geojson = item.geometry;
            props.key = item.id;
            props.featureId = item._featureId || null;
            props.tableId = items[items.length-1];
            features.push(props);
          }
        }
        return features;
      },

      leafletMarkers: function leafletMarkers() {
        var markers = [];

        markers.push.apply(markers, this.markers);
        markers.push.apply(markers, this.geojsonParcels);

        return markers;
      },
    },
    methods: {
      getTableFromComps: function getTableFromComps(comps, tableId) {
        var matchingComps = comps.filter(function (comp) {
          return (
            comp.type === 'horizontal-table' &&
            comp._id == tableId
          );
        }) || [];
        return matchingComps[0];
      },
      getConfigForTable: function getConfigForTable(tableId) {
        var topics = this.$config.topics || [];

        for (var i$1 = 0, list$1 = topics; i$1 < list$1.length; i$1 += 1) {
          var topic = list$1[i$1];

          var comps = topic.components || [];

          // try outer comps
          var table = this.getTableFromComps(comps, tableId);

          if (table) { return table; }

          // try inner comps
          for (var i = 0, list = comps; i < list.length; i += 1) {
            var comp = list[i];

            var options = comp.options || {};

            var innerComps = options.components || options.tables || [];

            if (innerComps.length > 0) {
              var innerTable = this.getTableFromComps(innerComps, tableId);
              // console.log('table on 2nd try', innerTable, innerComps);

              if (innerTable) { return innerTable; }
            }
          }
        }
      },
      bringMarkerToFront: function bringMarkerToFront(circleMarker) {
        // put marker on top
        var el = circleMarker._path;

        // remove from parent
        var group = circleMarker._renderer._rootGroup;
        group.removeChild(el);

        // append to end (which brings it to the front)
        group.appendChild(el);
      },
      handleMarkerMouseover: function handleMarkerMouseover(e) {

        if (!this.isMobileOrTablet) {
          var target = e.target;
          var ref = target.options.data;
          var featureId = ref.featureId;
          var tableId = ref.tableId;
          var highlightOnMapMouseover = ref.highlightOnMapMouseover;
          // console.log('target:', target, 'featureId:', featureId, 'tableId:', tableId, 'highlightOnMapMouseover:', highlightOnMapMouseover);
          if (typeof highlightOnMapMouseover !== 'undefined') {
            if (highlightOnMapMouseover != false) {
              this.$store.commit('setActiveFeature', { featureId: featureId, tableId: tableId });
            }
          } else {
            this.$store.commit('setActiveFeature', { featureId: featureId, tableId: tableId });
          }
        }
      },
      handleMarkerClick: function handleMarkerClick(e) {
        console.log('handleMarkerClick is starting');
        if (this.isMobileOrTablet) {
          // console.log('handleMarkerClick actions are running');
          var target = e.target;
          var ref = target.options.data;
          var featureId = ref.featureId;
          var tableId = ref.tableId;
          // console.log('target:', target, 'featureId:', featureId, 'tableId:', tableId);
          this.$store.commit('setActiveFeature', { featureId: featureId, tableId: tableId });
        }
      },
      handleMarkerMouseout: function handleMarkerMouseout(e) {
        // console.log('handleMarkerMouseout is starting');
        // if (!this.isMobileOrTablet) {
          // console.log('handleMarkerMouseout actions are running');
          var target = e.target;
          this.$store.commit('setActiveFeature', null);
        // }
      },
      updateMarkerFillColor: function updateMarkerFillColor(marker) {
        // console.log('updateMarkerFillColor, marker:', marker);
        // get next fill color
        var ref = marker.options.data;
        var featureId = ref.featureId;
        var tableId = ref.tableId;
        var nextFillColor = this.fillColorForOverlayMarker(featureId, tableId);

        // highlight. we're doing this here (non-reactively) because binding the
        // fill color property was not performing well enough.
        var nextStyle = Object.assign({}, marker.options);
        nextStyle.fillColor = nextFillColor;
        marker.setStyle(nextStyle);
      },
    }
  };

  (function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" .mb-panel-map[data-v-11a08c18] { /*this allows the loading mask to fill the div*/ position: relative; } .mb-map-with-widget[data-v-11a08c18] { height: 50%; } .widget-slot[data-v-11a08c18] { display: inline-block; float: left; } .mb-map-loading-mask[data-v-11a08c18] { /*display: inline;*/ position: absolute; top: 0; height: 100%; width: 100%; background: rgba(0, 0 ,0 , 0.25); z-index: 1000; text-align: center; vertical-align: middle; } .mb-map-loading-mask-inner[data-v-11a08c18] { position: absolute; top: 40%; left: 40%; } /*small retina*/ /*@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (max-width: 39.9375em) { .mb-search-control-input { max-width: 250px; } }*/ "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

  var MapPanel = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:this.mapPanelContainerClass,attrs:{"id":"map-panel-container"}},[_vm._m(0),_vm._v(" "),_c('map_',{class:{ 'mb-map-with-widget': this.$store.state.cyclomedia.active || this.$store.state.pictometry.active },attrs:{"id":"map-tag","center":this.$store.state.map.center,"zoom":this.$store.state.map.zoom,"zoom-control-position":"bottomright","min-zoom":this.$config.map.minZoom,"max-zoom":this.$config.map.maxZoom},on:{"l-click":_vm.handleMapClick,"l-moveend":_vm.handleMapMove}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isGeocoding),expression:"isGeocoding"}],staticClass:"mb-map-loading-mask"},[_c('div',{staticClass:"mb-map-loading-mask-inner"},[_c('i',{staticClass:"fa fa-spinner fa-4x spin"}),_vm._v(" "),_c('h1',[_vm._v("Finding address...")])])]),_vm._v(" "),_vm._l((this.$config.map.basemaps),function(basemap,key){return (_vm.activeBasemap === key)?_c('esri-tiled-map-layer',{key:key,attrs:{"url":basemap.url,"max-zoom":basemap.maxZoom,"attribution":basemap.attribution}}):_vm._e()}),_vm._v(" "),_vm._l((this.$config.map.tiledLayers),function(tiledLayer,key){return (_vm.tiledLayers.includes(key))?_c('esri-tiled-map-layer',{key:key,attrs:{"url":tiledLayer.url,"zIndex":tiledLayer.zIndex,"attribution":tiledLayer.attribution}}):_vm._e()}),_vm._v(" "),_vm._l((this.$config.map.tiledOverlays),function(tiledLayer,key){return (_vm.activeTiledOverlays.includes(key))?_c('esri-tiled-overlay',{key:key,attrs:{"url":tiledLayer.url,"zIndex":tiledLayer.zIndex,"opacity":tiledLayer.opacity}}):_vm._e()}),_vm._v(" "),_vm._l((this.$config.map.dynamicMapLayers),function(dynamicLayer,key){return (_vm.activeDynamicMaps.includes(key))?_c('esri-dynamic-map-layer',{key:key,attrs:{"url":dynamicLayer.url,"attribution":dynamicLayer.attribution,"transparent":true,"opacity":dynamicLayer.opacity}}):_vm._e()}),_vm._v(" "),_vm._l((this.$config.map.featureLayers),function(featureLayer,key){return (_vm.shouldShowFeatureLayer(key, featureLayer.minZoom))?_c('esri-feature-layer',{key:key,attrs:{"layerName":key,"url":featureLayer.url,"color":featureLayer.color,"fillColor":featureLayer.color,"fillOpacity":featureLayer.fillOpacity,"weight":featureLayer.weight,"style_":featureLayer.style,"minZoom":featureLayer.minZoom,"maxZoom":featureLayer.maxZoom,"zIndex":featureLayer.zIndex,"markerType":featureLayer.markerType,"radius":featureLayer.radius,"interactive":featureLayer.interactive}}):_vm._e()}),_vm._v(" "),_vm._l((this.imageOverlayItems),function(item,key){return (_vm.shouldShowImageOverlay(item.properties.RECMAP))?_c('esri-dynamic-map-layer',{key:key,attrs:{"url":'//gis.phila.gov/arcgis/rest/services/Atlas/RegMaps/MapServer',"layers":[0],"layerDefs":'0:NAME=\'g' + item.properties.RECMAP.toLowerCase() + '.tif\'',"transparent":true,"opacity":0.5}}):_vm._e()}),_vm._v(" "),_vm._l((_vm.markersForAddress),function(marker,index){return _c('vector-marker',{key:marker.key,attrs:{"latlng":marker.latlng,"markerColor":marker.color,"icon":marker.icon}})}),_vm._v(" "),_vm._l((_vm.markersForTopic),function(marker,index){return _c('vector-marker',{key:marker.key,attrs:{"latlng":marker.latlng,"markerColor":marker.color,"icon":marker.icon}})}),_vm._v(" "),(this.cyclomediaActive)?_c('png-marker',{attrs:{"icon":'images/camera.png',"latlng":_vm.cycloLatlng,"rotationAngle":_vm.cycloRotationAngle}}):_vm._e(),_vm._v(" "),(this.cyclomediaActive)?_c('svg-view-cone-marker',{attrs:{"latlng":_vm.cycloLatlng,"rotationAngle":_vm.cycloRotationAngle,"hFov":_vm.cycloHFov}}):_vm._e(),_vm._v(" "),_vm._l((_vm.geojsonParcels),function(geojsonFeature){return (_vm.shouldShowGeojson(geojsonFeature.key))?_c('geojson',{key:geojsonFeature.key,attrs:{"geojson":geojsonFeature.geojson,"fillColor":geojsonFeature.fillColor,"color":geojsonFeature.color,"weight":geojsonFeature.weight,"opacity":geojsonFeature.opacity,"fillOpacity":geojsonFeature.fillOpacity,"data":{
                 featureId: geojsonFeature.featureId,
                 tableId: geojsonFeature.tableId
               }}}):_vm._e()}),_vm._v(" "),_vm._l((_vm.geojsonForTopic),function(geojsonFeature){return (_vm.shouldShowGeojson(geojsonFeature.key))?_c('geojson',{key:geojsonFeature.key,attrs:{"geojson":geojsonFeature.geojson,"fillColor":geojsonFeature.fillColor,"color":geojsonFeature.color,"weight":geojsonFeature.weight,"opacity":geojsonFeature.opacity,"fillOpacity":geojsonFeature.fillOpacity,"data":{
                 featureId: geojsonFeature.featureId,
                 tableId: geojsonFeature.tableId
               }}}):_vm._e()}),_vm._v(" "),_vm._l((_vm.reactiveGeojsonFeatures),function(geojsonFeature){return (_vm.shouldShowGeojson(geojsonFeature.key))?_c('geojson',{key:geojsonFeature.key,attrs:{"geojson":geojsonFeature.geojson,"fillColor":geojsonFeature.fillColor,"color":geojsonFeature.color,"weight":geojsonFeature.weight,"opacity":geojsonFeature.opacity,"fillOpacity":geojsonFeature.fillOpacity,"data":{
                  featureId: geojsonFeature.featureId,
                  tableId: geojsonFeature.tableId,
                  highlightOnMapMouseover: geojsonFeature.highlightOnMapMouseover
                }},on:{"l-mouseover":_vm.handleMarkerMouseover,"l-click":_vm.handleMarkerClick,"l-mouseout":_vm.handleMarkerMouseout}}):_vm._e()}),_vm._v(" "),(this.$store.state.map.location.lat != null)?_c('circle-marker',{key:Math.random(),attrs:{"latlng":this.locationMarker.latlng,"radius":this.locationMarker.radius,"fillColor":this.locationMarker.fillColor,"color":this.locationMarker.color,"weight":this.locationMarker.weight,"opacity":this.locationMarker.opacity,"fillOpacity":this.locationMarker.fillOpacity}}):_vm._e(),_vm._v(" "),_vm._l((_vm.reactiveCircleMarkers),function(circleMarker){return _c('circle-marker',{key:Math.random(),attrs:{"highlightOnMapMouseover":circleMarker.highlightOnMapMouseover,"latlng":circleMarker.latlng,"radius":circleMarker.radius,"fillColor":circleMarker.fillColor,"color":circleMarker.color,"weight":circleMarker.weight,"opacity":circleMarker.opacity,"fillOpacity":circleMarker.fillOpacity,"data":{
                       featureId: circleMarker.featureId,
                       tableId: circleMarker.tableId,
                       highlightOnMapMouseover: circleMarker.highlightOnMapMouseover
                     }},on:{"l-mouseover":_vm.handleMarkerMouseover,"l-click":_vm.handleMarkerClick,"l-mouseout":_vm.handleMarkerMouseout}})}),_vm._v(" "),_c('control-corner',{attrs:{"vSide":'top',"hSide":'almostright'}}),_vm._v(" "),_c('control-corner',{attrs:{"vSide":'top',"hSide":'almostleft'}}),_vm._v(" "),_vm._m(2),_vm._v(" "),_vm._m(3),_vm._v(" "),_vm._m(5),_vm._v(" "),_vm._m(7),_vm._v(" "),(this.measureControlEnabled)?_vm._m(8):_vm._e(),_vm._v(" "),_vm._m(9),_vm._v(" "),_vm._m(11),_vm._v(" "),_vm._m(12),_vm._v(" "),(this.addressAutocompleteEnabled)?_c('map-address-candidate-list',{attrs:{"position":this.addressInputPosition,"widthFromConfig":this.addressInputWidth}}):_vm._e(),_vm._v(" "),_vm._l((_vm.cyclomediaRecordings),function(recording){return (_vm.cyclomediaActive)?_c('cyclomedia-recording-circle',{key:recording.imageId,attrs:{"imageId":recording.imageId,"latlng":[recording.lat, recording.lng],"size":1.2,"color":'#3388ff',"weight":1},on:{"l-click":_vm.handleCyclomediaRecordingClick}}):_vm._e()})],2),_vm._v(" "),_vm._t("cycloWidget"),_vm._v(" "),_vm._t("pictWidget")],2)},staticRenderFns: [function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('full-screen-map-toggle-tab')},function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('basemap-toggle-control',{attrs:{"position":'topright'}})},function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.shouldShowImageryToggle)?_vm._m(1):_vm._e()],1)},function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('basemap-select-control',{attrs:{"position":this.basemapSelectControlPosition}})],1)},function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('pictometry-button',{attrs:{"position":'topright',"link":'pictometry',"imgSrc":'images/pictometry.png'}})},function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(this.shouldShowPictometryButton)?_vm._m(4):_vm._e()],1)},function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('cyclomedia-button',{attrs:{"position":'topright',"link":'cyclomedia',"imgSrc":'images/cyclomedia.png'},on:{"click":_vm.handleCyclomediaButtonClick}})},function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(this.shouldShowCyclomediaButton)?_vm._m(6):_vm._e()],1)},function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('measure-control',{attrs:{"position":'bottomleft'}})],1)},function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._l((Object.keys(_vm.legendControls)),function(legendControl){return _c('legend-control',{key:legendControl,attrs:{"position":'bottomleft',"options":_vm.legendControls[legendControl].options,"items":_vm.legendControls[legendControl].data}})}),1)},function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('location-control',{attrs:{"position":'bottomright'}})},function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(this.geolocationEnabled)?_vm._m(10):_vm._e()],1)},function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('map-address-input',{attrs:{"position":this.addressInputPosition,"placeholder":this.addressInputPlaceholder,"widthFromConfig":this.addressInputWidth}})],1)}],_scopeId: 'data-v-11a08c18',
    name: 'MapPanel',
    mixins: [
      markersMixin,
      philaVueMapping.cyclomediaMixin,
      philaVueMapping.pictometryMixin ],
    components: {
      Map_: philaVueMapping.Map_,
      Control: philaVueMapping.Control,
      MapAddressInput: philaVueMapping.MapAddressInput,
      MapAddressCandidateList: philaVueMapping.MapAddressCandidateList,
      EsriTiledMapLayer: philaVueMapping.EsriTiledMapLayer,
      EsriTiledOverlay: philaVueMapping.EsriTiledOverlay,
      EsriDynamicMapLayer: philaVueMapping.EsriDynamicMapLayer,
      EsriFeatureLayer: philaVueMapping.EsriFeatureLayer,
      Geojson: philaVueMapping.Geojson,
      CircleMarker: philaVueMapping.CircleMarker,
      // OpacitySlider,
      VectorMarker: philaVueMapping.VectorMarker,
      PngMarker: philaVueMapping.PngMarker,
      BasemapToggleControl: philaVueMapping.BasemapToggleControl,
      BasemapSelectControl: philaVueMapping.BasemapSelectControl,
      FullScreenMapToggleTab: philaVueMapping.FullScreenMapToggleTab,
      LocationControl: philaVueMapping.LocationControl,
      PictometryButton: philaVueMapping.PictometryButton,
      CyclomediaButton: philaVueMapping.CyclomediaButton,
      CyclomediaRecordingCircle: philaVueMapping.CyclomediaRecordingCircle,
      SvgViewConeMarker: philaVueMapping.SvgViewConeMarker,
      MeasureControl: philaVueMapping.MeasureControl,
      LegendControl: philaVueMapping.LegendControl,
      BasemapTooltip: philaVueMapping.BasemapTooltip,
      ControlCorner: philaVueMapping.ControlCorner,
    },
    // data: {
    data: function data() {
      var data = {
        zoomToShape: {
          geojsonParcels: [],
          geojsonForTopic: [],
          markersForAddress: [],
          markersForTopic: [],
        },
      };
      return data;
    },
    created: function created() {
      // if there's a default address, navigate to it
      var defaultAddress = this.$config.defaultAddress;
      if (defaultAddress) {
        this.$controller.goToDefaultAddress(defaultAddress);
      }

      var cyclomediaConfig = this.$config.cyclomedia || {};
      if (cyclomediaConfig.enabled) {
      // create cyclomedia recordings client
        this.$cyclomediaRecordingsClient = new philaVueMapping.CyclomediaRecordingsClient(
          this.$config.cyclomedia.recordingsUrl,
          this.$config.cyclomedia.username,
          this.$config.cyclomedia.password,
          4326
        );
      }
    },
    computed: {
      // shouldShowAddressInput() {
      //   if (this.$config.addressInputLocation == 'map') {
      //     return true;
      //   } else {
      //     return false;
      //   }
      // },
      addressAutocompleteEnabled: function addressAutocompleteEnabled() {
        // TODO tidy up the code
        if (this.$config.addressInput) {
          if (this.$config.addressInput.autocompleteEnabled === true) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      },
      addressInputPosition: function addressInputPosition() {
        if (this.isMobileOrTablet) {
          return 'topleft'
        } else {
          return 'topalmostleft'
        }
      },
      addressInputWidth: function addressInputWidth() {
        if (this.$config.addressInput) {
          return this.$config.addressInput.mapWidth;
        } else {
          return 415;
        }
      },
      addressInputPlaceholder: function addressInputPlaceholder() {
        if (this.$config.addressInput) {
          return this.$config.addressInput.placeholder;
        } else {
          return null
        }
      },
      basemapSelectControlPosition: function basemapSelectControlPosition() {
        if (this.isMobileOrTablet) {
          return 'topright'
        } else {
          return 'topalmostright'
        }
      },
      shouldShowAddressCandidateList: function shouldShowAddressCandidateList() {
        return this.$store.state.shouldShowAddressCandidateList;
      },
      measureControlEnabled: function measureControlEnabled() {
        if (this.$config.measureControlEnabled === false) {
          return false;
        } else {
          return true;
        }
      },
      fullScreenMapEnabled: function fullScreenMapEnabled() {
        return this.$store.state.fullScreenMapEnabled;
      },
      fullScreenTopicsEnabled: function fullScreenTopicsEnabled() {
        return this.$store.state.fullScreenTopicsEnabled;
      },
      mapPanelContainerClass: function mapPanelContainerClass() {
        // return 'medium-12 small-order-1 small-24 medium-order-2 mb-panel mb-panel-map'
        if (this.fullScreenMapEnabled) {
          return 'medium-24 small-order-1 small-24 medium-order-2 mb-panel mb-panel-map'
        } else if (this.fullScreenMapOnly) {
          return 'medium-1 small-order-1 small-1 medium-order-2 mb-panel mb-panel-map'
        } else if (this.fullScreenTopicsEnabled) {
          return 'medium-1 small-order-1 small-24 medium-order-2 mb-panel mb-panel-map'
        } else {
          return 'medium-12 small-order-1 small-24 medium-order-2 mb-panel mb-panel-map'
        }
      },
      cycloLatlng: function cycloLatlng() {
        if (this.$store.state.cyclomedia.orientation.xyz !== null) {
          var xyz = this.$store.state.cyclomedia.orientation.xyz;
          return [xyz[1], xyz[0]];
        } else {
          var center = this.$config.map.center;
          return center;
        }
      },
      cycloRotationAngle: function cycloRotationAngle() {
        return this.$store.state.cyclomedia.orientation.yaw * (180/3.14159265359);
      },
      cycloHFov: function cycloHFov() {
        return this.$store.state.cyclomedia.orientation.hFov;
      },
      isMobileOrTablet: function isMobileOrTablet() {
        return this.$store.state.isMobileOrTablet;
      },
      shouldShowCyclomediaButton: function shouldShowCyclomediaButton() {
        return this.$config.cyclomedia.enabled && !this.isMobileOrTablet;
      },
      shouldShowPictometryButton: function shouldShowPictometryButton() {
        return this.$config.pictometry.enabled && !this.isMobileOrTablet;
      },
      geolocationEnabled: function geolocationEnabled() {
        if (this.$config.geolocation) {
          return this.$config.geolocation.enabled;
        } else {
          return false;
        }
      },
      activeDorParcel: function activeDorParcel() {
        // return this.$store.state.activeDorParcel;
        return this.$store.state.parcels.dor.activeParcel;
      },
      legendControls: function legendControls() {
        return this.$config.legendControls || {};
      },
      imageOverlay: function imageOverlay() {
        return this.$store.state.map.imageOverlay;
      },
      imageOverlayItems: function imageOverlayItems() {
        // console.log('calculating imageOverlayItem');
        if (this.activeTopicConfig.imageOverlayGroup) {
          var overlayGroup = this.activeTopicConfig.imageOverlayGroup;
          var state = this.$store.state;
          var overlay = this.$config.imageOverlayGroups[overlayGroup].items(state);
          // console.log('returning imageOverlayItem', overlay);
          return overlay;
        } else {
          return [];
        }
      },
      imageOverlayInfo: function imageOverlayInfo() {
        // console.log('config:', this.$config);
        return this.$config.map.dynamicMapLayers.regmaps;
      },
      activeBasemap: function activeBasemap() {
        var shouldShowImagery = this.$store.state.map.shouldShowImagery;
        if (shouldShowImagery) {
          return this.$store.state.map.imagery;
        }
        var defaultBasemap = this.$config.map.defaultBasemap;
        var basemap = this.$store.state.map.basemap || defaultBasemap;
        return basemap;
      },
      tiledLayers: function tiledLayers() {
        var activeBasemap = this.activeBasemap;
        var activeBasemapConfig = this.configForBasemap(activeBasemap);

        return activeBasemapConfig.tiledLayers || [];
      },
      activeTiledOverlays: function activeTiledOverlays() {
        if (!this.activeTopicConfig || !this.activeTopicConfig.tiledOverlays) {
          return [];
        } else {
          return this.activeTopicConfig.tiledOverlays;
        }
      },
      activeDynamicMaps: function activeDynamicMaps() {
        if (!this.activeTopicConfig || !this.activeTopicConfig.dynamicMapLayers) {
          return [];
        } else {
          return this.activeTopicConfig.dynamicMapLayers;
        }
      },
      activeFeatureLayers: function activeFeatureLayers() {
        if (!this.activeTopicConfig || !this.activeTopicConfig.featureLayers) {
          return [];
        } else {
          return this.activeTopicConfig.featureLayers;
        }
      },
      activeFeature: function activeFeature() {
        return this.$store.state.activeFeature;
      },
      basemaps: function basemaps() {
        return Object.values(this.$config.map.basemaps);
      },
      imageryBasemaps: function imageryBasemaps() {
        return this.basemaps.filter(function (basemap) { return basemap.type === 'imagery'; });
      },
      hasImageryBasemaps: function hasImageryBasemaps() {
        return this.imageryBasemaps.length > 0;
      },
      shouldShowImageryToggle: function shouldShowImageryToggle() {
        if (this.$config.map.imagery) {
          return this.hasImageryBasemaps && this.$config.map.imagery.enabled;
        } else {
          return this.hasImageryBasemaps;
        }
      },
      identifyFeature: function identifyFeature() {
        var configFeature;
        if (this.geocodeType === 'intersection') {
          configFeature = "address-marker";
        } else if (this.activeTopicConfig.identifyFeature) {
          configFeature = this.activeTopicConfig.identifyFeature;
        } else {
          if (this.$config) {
            configFeature = this.$config.map.defaultIdentifyFeature;
          }
        }
        return configFeature;
      },
      activeTopic: function activeTopic() {
        return this.$store.state.activeTopic;
      },
      activeTopicConfig: function activeTopicConfig() {
        var key = this.activeTopic;
        var config;

        // if no active topic, return null
        if (key) {
          config = this.$config.topics.filter(function (topic) {
            return topic.key === key;
          })[0];
        }

        return config || {};
      },
      activeParcelLayer: function activeParcelLayer() {
        return this.activeTopicConfig.parcels;
      },
      dorParcels: function dorParcels() {
        return this.$store.state.parcels.dor.data;
      },
      pwdParcel: function pwdParcel() {
        return this.$store.state.parcels.pwd;
      },
      geocodeResult: function geocodeResult() {
        return this.$store.state.geocode.data || {};
      },
      geocodeGeom: function geocodeGeom() {
        return this.geocodeResult.geometry;
      },
      geocodeType: function geocodeType() {
        return this.geocodeResult.ais_feature_type;
      },
      streetAddress: function streetAddress() {
        return this.geocodeResult.properties.street_address;
      },
      picOrCycloActive: function picOrCycloActive() {
        if (this.cyclomediaActive || this.pictometryActive) {
          return true;
        } else {
          return false;
        }
      },
      mapBounds: function mapBounds() {
        // TODO calculate map bounds based on leaflet markers above
      },
      boundsBasedOnShape: function boundsBasedOnShape() {
        return this.$store.state.map.boundsBasedOnShape;
      },
      isGeocoding: function isGeocoding() {
        return this.$store.state.geocode.status === 'waiting';
      },
    },
    watch: {
      picOrCycloActive: function picOrCycloActive(value) {
        var this$1 = this;

        this.$nextTick(function () {
          this$1.$store.state.map.map.invalidateSize();
        });
      },
      geojsonForTopic: function geojsonForTopic(nextGeojson) {
        var czts = this.activeTopicConfig.zoomToShape;
        var dzts = this.$data.zoomToShape;
        if (!czts || !czts.includes('geojsonForTopic')) {
          dzts.geojsonForTopic = [];
          return;
        } else {
          dzts.geojsonForTopic = nextGeojson;
          // console.log('exiting geojsonForTopic');
          this.checkBoundsChanges();
        }
      },

      geojsonParcels: function geojsonParcels(nextGeojson) {
        var czts = this.activeTopicConfig.zoomToShape;
        var dzts = this.$data.zoomToShape;
        if (!czts || !czts.includes('geojsonParcels')) {
          dzts.geojsonParcels = [];
          return;
        } else {
          dzts.geojsonParcels = nextGeojson;
          // console.log('exiting geojsonParcels');
          this.checkBoundsChanges();
        }
      },

      markersForAddress: function markersForAddress(nextMarkers) {
        var czts = this.activeTopicConfig.zoomToShape;
        var dzts = this.$data.zoomToShape;
        if (!czts || !czts.includes('markersForAddress')) {
          dzts.markersForAddress = [];
          return;
        } else {
          dzts.markersForAddress = nextMarkers;
          // console.log('exiting markersForAddress')
          this.checkBoundsChanges();
        }
      },

      // watches computed markersForTopic, adds info to data zoomToShape.markersForTopic
      // it does not update zoomToShape unless there is a change
      // because the markers computed recalculates extremely often, this is needed
      markersForTopic: function markersForTopic(nextMarkers) {
        var czts = this.activeTopicConfig.zoomToShape;
        var dzts = this.$data.zoomToShape;
        if (!czts || !czts.includes('markersForTopic')) {
        // if (!czts.includes('markersForTopic')) {
          dzts.markersForTopic = [];
          return;
        } else {
          dzts.markersForTopic = nextMarkers;
          // console.log('exiting markersForTopic');
          this.checkBoundsChanges();
        }
      },

      fullScreenTopicsEnabled: function fullScreenTopicsEnabled() {
        var this$1 = this;

        this.$nextTick(function () {
          this$1.$store.state.map.map.invalidateSize();
        });
      },
    },
    methods: {
      checkBoundsChanges: function checkBoundsChanges() {
        var czts = this.activeTopicConfig.zoomToShape;
        if (!czts) {
          return;
        }
        var dzts = this.$data.zoomToShape;
        // console.log('dzts:', dzts, 'czts:', czts);
        var tf = [];
        for (var i = 0, list = czts; i < list.length; i += 1) {
          var shape = list[i];

          if (dzts[shape] !== false && dzts[shape].length > 0) {
            tf.push(true);
          } else {
            tf.push(false);
          }
        }
        // console.log('MapPanel.vue checkBoundsChanges, tf:', tf);
        if (tf.includes(false)) {
          return;
        } else {
          this.setMapToBounds();
        }
      },

      setMapToBounds: function setMapToBounds() {
        // console.log('setMapToBounds is running');
        var featureArray = [];
        var czts = this.activeTopicConfig.zoomToShape;
        if (czts) {
          if (czts.includes('geojsonParcels')) {
            for (var i = 0, list = this.geojsonParcels; i < list.length; i += 1) {
              var geojsonFeature = list[i];

              featureArray.push(leaflet.geoJSON(geojsonFeature.geojson));
              // featureArray.push(L.geoJSON(geojsonFeature.geojson))
            }
          }
          if (czts.includes('geojsonForTopic')) {
            for (var i$1 = 0, list$1 = this.geojsonForTopic; i$1 < list$1.length; i$1 += 1) {
              var geojsonFeature$1 = list$1[i$1];

              featureArray.push(leaflet.geoJSON(geojsonFeature$1.geojson));
              // featureArray.push(L.geoJSON(geojsonFeature.geojson))
            }
          }
          if (czts.includes('markersForAddress')) {
            for (var i$2 = 0, list$2 = this.markersForAddress; i$2 < list$2.length; i$2 += 1) {
              var marker = list$2[i$2];

              featureArray.push(leaflet.marker(marker.latlng));
              // featureArray.push(L.marker(marker.latlng))
            }
          }
          if (czts.includes('markersForTopic')) {
            for (var i$3 = 0, list$3 = this.markersForTopic; i$3 < list$3.length; i$3 += 1) {
              var marker$1 = list$3[i$3];

              featureArray.push(leaflet.marker(marker$1.latlng));
              // featureArray.push(L.marker(marker.latlng))
            }
          }
          var group = new leaflet.featureGroup(featureArray);
          // const group = new L.featureGroup(featureArray);
          var bounds = group.getBounds();
          this.$store.commit('setMapBounds', bounds);
        }
      },
      configForBasemap: function configForBasemap(basemap) {
        return this.$config.map.basemaps[basemap] || {};
      },
      shouldShowGeojson: function shouldShowGeojson(key) {
        if (this.activeTopicConfig.basemap === 'pwd') {
          return true;
        } else {
          return key === this.activeDorParcel;
        }
      },
      shouldShowImageOverlay: function shouldShowImageOverlay(key) {
        return key === this.imageOverlay;
      },
      shouldShowFeatureLayer: function shouldShowFeatureLayer(key) {
        if (this.activeFeatureLayers.includes(key)) {
          return true;
        }
        return false;
      },
      handleMapClick: function handleMapClick(e) {
        // console.log('MapPanel.vue handleMapClick e:', e);
        // latLng = L.latLng(e.lat, e.lng)
        this.$controller.handleMapClick(e);
      },

      handleMapMove: function handleMapMove(e) {
        var map = this.$store.state.map.map;

        var pictometryConfig = this.$config.pictometry || {};

        var center = map.getCenter();
        var lat = center.lat;
        var lng = center.lng;
        var coords = [lng, lat];

        if (pictometryConfig.enabled) {
          // update state for pictometry
          this.$store.commit('setPictometryMapCenter', coords);

          var zoom = map.getZoom();
          this.$store.commit('setPictometryMapZoom', zoom);
        }

        var cyclomediaConfig = this.$config.cyclomedia || {};

        if (cyclomediaConfig.enabled) {
          // update cyclo recordings
          this.updateCyclomediaRecordings();
          this.$store.commit('setCyclomediaLatLngFromMap', [lat, lng]);
        }
      },
      fillColorForOverlayMarker: function fillColorForOverlayMarker(markerId, tableId) {
        // get map overlay style and hover style for table
        var tableConfig = this.getConfigForTable(tableId);
        var mapOverlay = tableConfig.options.mapOverlay;
        var style = mapOverlay.style;
        var hoverStyle = mapOverlay.hoverStyle;

        // compare id to active feature id
        var activeFeature = this.activeFeature;
        var useHoverStyle = (
          markerId === activeFeature.featureId &&
          tableId === activeFeature.tableId
        );
        var curStyle = useHoverStyle ? hoverStyle : style;

        return curStyle.fillColor;
      },
    }, // end of methods
  }; //end of export

  (function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=" /*don't highlight any form elements*/ input:focus, select:focus, textarea:focus, button:focus { outline: none; } .mb-panel-topics-with-widget { height: 50%; } /* standards applies padding to buttons, which causes some weirdness with buttons on the map panel. override here. */ button { padding: inherit; } .topic-panel-false { /* display: none; */ } @media screen and (min-width: 46.875em) { .topic-panel-false { display: none; } .map-panel-false { display: none; } } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();

  var Mapboard = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.rootClass,style:(_vm.mbRootStyle),attrs:{"id":"mb-root"}},[_c('topic-panel',{class:this.shouldShowTopicPanel}),_vm._v(" "),(this.fullScreenTopicsOnly !== true)?_c('map-panel',{class:this.shouldShowMapPanel},[(this.shouldLoadCyclomediaWidget)?_c('cyclomedia-widget',{directives:[{name:"show",rawName:"v-show",value:(_vm.cyclomediaActive),expression:"cyclomediaActive"}],attrs:{"slot":"cycloWidget","screen-percent":"2"},slot:"cycloWidget"}):_vm._e(),_vm._v(" "),(this.shouldLoadPictometryWidget)?_c('pictometry-widget',{directives:[{name:"show",rawName:"v-show",value:(_vm.pictometryActive),expression:"pictometryActive"}],attrs:{"slot":"pictWidget","apiKey":this.ak,"secretKey":this.sk},slot:"pictWidget"},[(this.pictometryShowAddressMarker)?_c('pictometry-png-marker',{attrs:{"latlng":[this.geocodeData.geometry.coordinates[1], this.geocodeData.geometry.coordinates[0]],"icon":'images/markers.png',"height":60,"width":40,"offsetX":0,"offsetY":0}}):_vm._e(),_vm._v(" "),(this.pictometryActive)?_c('pictometry-layer'):_vm._e(),_vm._v(" "),(this.cyclomediaActive && this.pictometryActive)?_c('pictometry-png-marker',{attrs:{"latlng":_vm.cycloLatlng,"icon":'images/camera2.png',"height":20,"width":30,"offsetX":-2,"offsetY":-2}}):_vm._e(),_vm._v(" "),(this.cyclomediaActive && this.pictometryActive)?_c('pictometry-view-cone',{attrs:{"latlng":_vm.cycloLatlng,"rotationAngle":_vm.cycloRotationAngle,"hFov":_vm.cycloHFov}}):_vm._e()],1):_vm._e()],1):_vm._e()],1)},staticRenderFns: [],
    components: {
      // HeaderComp,
      TopicPanel: TopicPanel,
      MapPanel: MapPanel,
      CyclomediaWidget: philaVueMapping.CyclomediaWidget,
      PictometryWidget: philaVueMapping.PictometryWidget,
      PictometryLayer: philaVueMapping.PictometryLayer,
      PictometryPngMarker: philaVueMapping.PictometryPngMarker,
      PictometryViewCone: philaVueMapping.PictometryViewCone,
      Popover: philaVueComps.Popover,
    },
    data: function data() {
      var data = {
        // this will only affect the app size if the app is set to "plugin" mode
        mbRootStyle: {
          'height': '100px'
        }
      };
      return data;
    },
    created: function created() {
      // console.log('mapboard created, this.$config:', this.$config);
      if (this.$config.panels) {
        if (!this.$config.panels.includes('map')) {
          this.$store.commit('setTopicsOnly', true);
        } else if (!this.$config.panels.includes('topics')) {
          this.$store.commit('setMapOnly', true);
        }
      }
      window.addEventListener('click', this.closeAddressCandidateList);
      window.addEventListener('resize', this.handleWindowResize);
      this.handleWindowResize();
    },
    mounted: function mounted() {
      this.$controller.appDidLoad();
      if (this.$config.initialPopover && window.location.hash == '') {
        this.$store.commit('setPopoverOpen', true);
        this.$store.commit('setPopoverOptions', this.$config.initialPopover.options);
        if (this.$config.initialPopover.slots) {
          this.$store.commit('setPopoverText', this.$config.initialPopover.slots.text);
        }
      }
    },
    computed: {
      shouldShowHeader: function shouldShowHeader() {
        if (this.$config.header) {
          return this.$config.header.enabled;
        } else {
          return false;
        }
      },
      rootClass: function rootClass() {
        if (this.$config.plugin) {
          return 'grid-x';
        } else {
          return 'cell medium-auto grid-x';
        }
      },
      isMobileOrTablet: function isMobileOrTablet() {
        return this.$store.state.isMobileOrTablet;
      },
      shouldLoadCyclomediaWidget: function shouldLoadCyclomediaWidget() {
        return this.$config.cyclomedia.enabled && !this.isMobileOrTablet;
      },
      shouldLoadPictometryWidget: function shouldLoadPictometryWidget() {
        return this.$config.pictometry.enabled && !this.isMobileOrTablet;
      },
      fullScreenMapOnly: function fullScreenMapOnly() {
        return this.$store.state.fullScreen.mapOnly;
      },
      fullScreenMapEnabled: function fullScreenMapEnabled() {
        return this.$store.state.fullScreenMapEnabled;
      },
      fullScreenTopicsOnly: function fullScreenTopicsOnly() {
        return this.$store.state.fullScreen.topicsOnly;
      },
      fullScreenTopicsEnabled: function fullScreenTopicsEnabled() {
        return this.$store.state.fullScreenTopicsEnabled;
      },
      shouldShowTopicPanel: function shouldShowTopicPanel() {
        var value;
        if (!this.fullScreenMapEnabled && !this.fullScreenMapOnly) {
          value = 'topic-panel-true';
        } else {
          value = 'topic-panel-false';
        }
        return value;
      },
      shouldShowMapPanel: function shouldShowMapPanel() {
        var value;
        if (!this.fullScreenTopicsEnabled && !this.fullScreenTopicsOnly) {
          value = 'map-panel-true';
        } else {
          value = 'map-panel-false';
        }
        return value;
      },
      cyclomediaActive: function cyclomediaActive() {
        return this.$store.state.cyclomedia.active
      },
      cycloLatlng: function cycloLatlng() {
        if (this.$store.state.cyclomedia.orientation.xyz !== null) {
          var xyz = this.$store.state.cyclomedia.orientation.xyz;
          return [xyz[1], xyz[0]];
        } else {
          var center = this.$config.map.center;
          return center;
        }
      },
      cycloRotationAngle: function cycloRotationAngle() {
        return this.$store.state.cyclomedia.orientation.yaw * (180/3.14159265359);
      },
      cycloHFov: function cycloHFov() {
        return this.$store.state.cyclomedia.orientation.hFov;
      },
      pictometryActive: function pictometryActive() {
        return this.$store.state.pictometry.active
      },
      pictometryZoom: function pictometryZoom() {
        return this.$store.state.pictometry.zoom
      },
      pictometryShowAddressMarker: function pictometryShowAddressMarker() {
        if (!this.pictometryActive || !this.geocodeData) {
          return false;
        } else if (this.pictometryZoom < 20 && this.cyclomediaActive) {
          return false;
        } else {
          return true;
        }
      },
      geocodeData: function geocodeData() {
        return this.$store.state.geocode.data
      },
      ak: function ak() {
        var host = window.location.hostname;
        if (host === 'atlas.phila.gov') {
          return this.$config.pictometry.apiKey;
        }
        if (host === 'atlas-dev.phila.gov') {
          return this.$config.pictometryDev.apiKey;
        }
        if (host === 'cityatlas.phila.gov') {
          return this.$config.pictometryCity.apiKey;
        }
        if (host === 'cityatlas-dev.phila.gov') {
          return this.$config.pictometryCityDev.apiKey;
        }
        if (host === '10.8.101.67') {
          return this.$config.pictometryLocal.apiKey;
        }
      },
      sk: function sk() {
        var host = window.location.hostname;
        if (host === 'atlas.phila.gov') {
          return this.$config.pictometry.secretKey;
        }
        if (host === 'atlas-dev.phila.gov') {
          return this.$config.pictometryDev.secretKey;
        }
        if (host === 'cityatlas.phila.gov') {
          return this.$config.pictometryCity.secretKey;
        }
        if (host === 'cityatlas-dev.phila.gov') {
          return this.$config.pictometryCityDev.secretKey;
        }
        if (host === '10.8.101.67') {
          return this.$config.pictometryLocal.secretKey;
        }
      },
      popoverOpen: function popoverOpen() {
        return this.$store.state.popover.open;
      },
      popoverText: function popoverText() {
        return this.$store.state.popover.text;
      },
      popoverOptions: function popoverOptions() {
        return this.$store.state.popover.options;
      }
    },
    watch: {
      pictometryShowAddressMarker: function pictometryShowAddressMarker(nextValue) {
        console.log('watch pictometryShowAddressMarker', nextValue);
      }
    },
    methods: {
      closeAddressCandidateList: function closeAddressCandidateList() {
        this.$store.commit('setShouldShowAddressCandidateList', false);
      },
      handleWindowResize: function handleWindowResize() {
        // this only actually affects the size if it is set to "plugin mode"
        // if ($(window).width() >= 750) {
        if (window.innerWidth >= 750) {
          this.mbRootStyle.height = '600px';
        } else {
          this.mbRootStyle.height = 'auto';
        }
      }
    },
  };

  function generateUniqueId() {
    return Math.random().toString(36).substring(7);
  }

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var faSpinner = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', { value: true });
  var prefix = 'fas';
  var iconName = 'spinner';
  var width = 512;
  var height = 512;
  var ligatures = [];
  var unicode = 'f110';
  var svgPathData = 'M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z';

  exports.definition = {
    prefix: prefix,
    iconName: iconName,
    icon: [
      width,
      height,
      ligatures,
      unicode,
      svgPathData
    ]};

  exports.faSpinner = exports.definition;
  exports.prefix = prefix;
  exports.iconName = iconName;
  exports.width = width;
  exports.height = height;
  exports.ligatures = ligatures;
  exports.unicode = unicode;
  exports.svgPathData = svgPathData;
  });

  unwrapExports(faSpinner);
  var faSpinner_1 = faSpinner.definition;
  var faSpinner_2 = faSpinner.faSpinner;
  var faSpinner_3 = faSpinner.prefix;
  var faSpinner_4 = faSpinner.iconName;
  var faSpinner_5 = faSpinner.width;
  var faSpinner_6 = faSpinner.height;
  var faSpinner_7 = faSpinner.ligatures;
  var faSpinner_8 = faSpinner.unicode;
  var faSpinner_9 = faSpinner.svgPathData;

  var faBook = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', { value: true });
  var prefix = 'fas';
  var iconName = 'book';
  var width = 448;
  var height = 512;
  var ligatures = [];
  var unicode = 'f02d';
  var svgPathData = 'M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z';

  exports.definition = {
    prefix: prefix,
    iconName: iconName,
    icon: [
      width,
      height,
      ligatures,
      unicode,
      svgPathData
    ]};

  exports.faBook = exports.definition;
  exports.prefix = prefix;
  exports.iconName = iconName;
  exports.width = width;
  exports.height = height;
  exports.ligatures = ligatures;
  exports.unicode = unicode;
  exports.svgPathData = svgPathData;
  });

  unwrapExports(faBook);
  var faBook_1 = faBook.definition;
  var faBook_2 = faBook.faBook;
  var faBook_3 = faBook.prefix;
  var faBook_4 = faBook.iconName;
  var faBook_5 = faBook.width;
  var faBook_6 = faBook.height;
  var faBook_7 = faBook.ligatures;
  var faBook_8 = faBook.unicode;
  var faBook_9 = faBook.svgPathData;

  var faWrench = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', { value: true });
  var prefix = 'fas';
  var iconName = 'wrench';
  var width = 512;
  var height = 512;
  var ligatures = [];
  var unicode = 'f0ad';
  var svgPathData = 'M507.73 109.1c-2.24-9.03-13.54-12.09-20.12-5.51l-74.36 74.36-67.88-11.31-11.31-67.88 74.36-74.36c6.62-6.62 3.43-17.9-5.66-20.16-47.38-11.74-99.55.91-136.58 37.93-39.64 39.64-50.55 97.1-34.05 147.2L18.74 402.76c-24.99 24.99-24.99 65.51 0 90.5 24.99 24.99 65.51 24.99 90.5 0l213.21-213.21c50.12 16.71 107.47 5.68 147.37-34.22 37.07-37.07 49.7-89.32 37.91-136.73zM64 472c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z';

  exports.definition = {
    prefix: prefix,
    iconName: iconName,
    icon: [
      width,
      height,
      ligatures,
      unicode,
      svgPathData
    ]};

  exports.faWrench = exports.definition;
  exports.prefix = prefix;
  exports.iconName = iconName;
  exports.width = width;
  exports.height = height;
  exports.ligatures = ligatures;
  exports.unicode = unicode;
  exports.svgPathData = svgPathData;
  });

  unwrapExports(faWrench);
  var faWrench_1 = faWrench.definition;
  var faWrench_2 = faWrench.faWrench;
  var faWrench_3 = faWrench.prefix;
  var faWrench_4 = faWrench.iconName;
  var faWrench_5 = faWrench.width;
  var faWrench_6 = faWrench.height;
  var faWrench_7 = faWrench.ligatures;
  var faWrench_8 = faWrench.unicode;
  var faWrench_9 = faWrench.svgPathData;

  var faUniversity = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', { value: true });
  var prefix = 'fas';
  var iconName = 'university';
  var width = 512;
  var height = 512;
  var ligatures = [];
  var unicode = 'f19c';
  var svgPathData = 'M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a7.996 7.996 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128zm-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24zM96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192H96z';

  exports.definition = {
    prefix: prefix,
    iconName: iconName,
    icon: [
      width,
      height,
      ligatures,
      unicode,
      svgPathData
    ]};

  exports.faUniversity = exports.definition;
  exports.prefix = prefix;
  exports.iconName = iconName;
  exports.width = width;
  exports.height = height;
  exports.ligatures = ligatures;
  exports.unicode = unicode;
  exports.svgPathData = svgPathData;
  });

  unwrapExports(faUniversity);
  var faUniversity_1 = faUniversity.definition;
  var faUniversity_2 = faUniversity.faUniversity;
  var faUniversity_3 = faUniversity.prefix;
  var faUniversity_4 = faUniversity.iconName;
  var faUniversity_5 = faUniversity.width;
  var faUniversity_6 = faUniversity.height;
  var faUniversity_7 = faUniversity.ligatures;
  var faUniversity_8 = faUniversity.unicode;
  var faUniversity_9 = faUniversity.svgPathData;

  var faGavel = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', { value: true });
  var prefix = 'fas';
  var iconName = 'gavel';
  var width = 512;
  var height = 512;
  var ligatures = [];
  var unicode = 'f0e3';
  var svgPathData = 'M504.971 199.362l-22.627-22.627c-9.373-9.373-24.569-9.373-33.941 0l-5.657 5.657L329.608 69.255l5.657-5.657c9.373-9.373 9.373-24.569 0-33.941L312.638 7.029c-9.373-9.373-24.569-9.373-33.941 0L154.246 131.48c-9.373 9.373-9.373 24.569 0 33.941l22.627 22.627c9.373 9.373 24.569 9.373 33.941 0l5.657-5.657 39.598 39.598-81.04 81.04-5.657-5.657c-12.497-12.497-32.758-12.497-45.255 0L9.373 412.118c-12.497 12.497-12.497 32.758 0 45.255l45.255 45.255c12.497 12.497 32.758 12.497 45.255 0l114.745-114.745c12.497-12.497 12.497-32.758 0-45.255l-5.657-5.657 81.04-81.04 39.598 39.598-5.657 5.657c-9.373 9.373-9.373 24.569 0 33.941l22.627 22.627c9.373 9.373 24.569 9.373 33.941 0l124.451-124.451c9.372-9.372 9.372-24.568 0-33.941z';

  exports.definition = {
    prefix: prefix,
    iconName: iconName,
    icon: [
      width,
      height,
      ligatures,
      unicode,
      svgPathData
    ]};

  exports.faGavel = exports.definition;
  exports.prefix = prefix;
  exports.iconName = iconName;
  exports.width = width;
  exports.height = height;
  exports.ligatures = ligatures;
  exports.unicode = unicode;
  exports.svgPathData = svgPathData;
  });

  unwrapExports(faGavel);
  var faGavel_1 = faGavel.definition;
  var faGavel_2 = faGavel.faGavel;
  var faGavel_3 = faGavel.prefix;
  var faGavel_4 = faGavel.iconName;
  var faGavel_5 = faGavel.width;
  var faGavel_6 = faGavel.height;
  var faGavel_7 = faGavel.ligatures;
  var faGavel_8 = faGavel.unicode;
  var faGavel_9 = faGavel.svgPathData;

  fontawesomeSvgCore.library.add(faSpinner_2, faBook_2, faWrench_2, faUniversity_2, faGavel_2);
  var controllerMixin = philaVueDatafetch.controllerMixin;

  // helper function to auto-assign ids to horizontal tables
  function assignTableIds(comps) {
    for (var i = 0, list = comps; i < list.length; i += 1) {
      var comp = list[i];

      var options = comp.options || {};
      var innerComps = options.components || options.tables;

      // if this is a "group" component, recurse
      if (innerComps) {
        assignTableIds(innerComps);
        // return;
      }

      // skip comps that aren't horizontal tables
      if (comp.type !== 'horizontal-table') {
        continue;
      }

       var id = generateUniqueId();
       comp._id = id;
       // the id also needs to get passed to the horizontal table component, so
       // use the options object.
       comp.options.tableId = id;
    }
  }

  function assignHorizontalTableGroupIds(comps) {
    for (var i = 0, list = comps; i < list.length; i += 1) {
      var comp = list[i];

      var options = comp.options || {};
      var innerComps = options.tables;

      // if this is a "group" component, recurse
      if (!innerComps) {
        continue;
      }

      // skip comps that aren't horizontal table groups
      if (comp.type !== 'horizontal-table-group') {
        continue;
      }

       var id = generateUniqueId();
       comp._id = id;
       // the id also needs to get passed to the horizontal table component, so
       // use the options object.
       comp.options.horizontalTableGroupId = id;
    }
  }

  function initMapboard(clientConfig) {
    var baseConfigUrl = clientConfig.baseConfig;
    // console.log('baseConfigUrl:', baseConfigUrl);

    // get base config
    return axios.get(baseConfigUrl).then(function (response) {
      // console.log('in axios, clientConfig:', clientConfig);
      var data = response.data;
      // const data = baseConfigUrl;

      // parse raw js. yes, it's ok to use eval :)
      // http://stackoverflow.com/a/87260/676001
      var baseConfigFn = eval(data);
      var gatekeeperKey = clientConfig.gatekeeperKey;
      var baseConfig = baseConfigFn({ gatekeeperKey: gatekeeperKey });

      // deep merge base config and client config
      var config = mergeDeep(baseConfig, clientConfig);
      // const config = mergeDeep(baseConfigUrl, clientConfig);

      // assign table ids
      for (var i = 0, list = config.topics; i < list.length; i += 1) {
        var topic = list[i];

        assignTableIds(topic.components);
        assignHorizontalTableGroupIds(topic.components);
      }

      // make config accessible from each component via this.$config
      Vue.use(configMixin, config);

      // create store
      var store = createStore(config);

      // mix in controller
      Vue.use(controllerMixin, { config: config, store: store });
      // Vue.use(controllerMixin, { config, store, eventBus });

      Vue.component('font-awesome-icon', vueFontawesome.FontAwesomeIcon);
      // Vue.config.productionTip = false

      var customComps = clientConfig.customComps || [];
      // console.log('mapboard main.js, customComps:', customComps);
      for (var i$1 = 0, list$1 = Object.keys(customComps); i$1 < list$1.length; i$1 += 1) {
        var key = list$1[i$1];

        Vue.component(key, customComps[key]);
      }

      // mount main vue
      var vm = new Vue({
        el: config.el || '#mapboard',
        render: function (h) { return h(Mapboard); },
        store: store
      });

    }).catch(function (err) {
      console.error('Error loading base config:', err);
    });
  }

  exports.default = initMapboard;
  exports.Mapboard = Mapboard;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=mapboard.js.map
