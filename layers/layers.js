var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_building_reprojected_1 = new ol.format.GeoJSON();
var features_building_reprojected_1 = format_building_reprojected_1.readFeatures(json_building_reprojected_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_reprojected_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_reprojected_1.addFeatures(features_building_reprojected_1);
var lyr_building_reprojected_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_reprojected_1, 
                style: style_building_reprojected_1,
                interactive: true,
                title: '<img src="styles/legend/building_reprojected_1.png" /> building_reprojected'
            });
var format_Buildings_2 = new ol.format.GeoJSON();
var features_Buildings_2 = format_Buildings_2.readFeatures(json_Buildings_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildings_2.addFeatures(features_Buildings_2);
var lyr_Buildings_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Buildings_2, 
                style: style_Buildings_2,
                interactive: true,
                title: '<img src="styles/legend/Buildings_2.png" /> Buildings'
            });
var format_roads_3 = new ol.format.GeoJSON();
var features_roads_3 = format_roads_3.readFeatures(json_roads_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roads_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_3.addFeatures(features_roads_3);
var lyr_roads_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_roads_3, 
                style: style_roads_3,
                interactive: true,
                title: '<img src="styles/legend/roads_3.png" /> roads'
            });

lyr_OSMStandard_0.setVisible(true);lyr_building_reprojected_1.setVisible(true);lyr_Buildings_2.setVisible(true);lyr_roads_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_building_reprojected_1,lyr_Buildings_2,lyr_roads_3];
lyr_building_reprojected_1.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'area': 'area', });
lyr_Buildings_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_roads_3.set('fieldAliases', {'id': 'id', });
lyr_building_reprojected_1.set('fieldImages', {'id': '', 'Name': '', 'area': '', });
lyr_Buildings_2.set('fieldImages', {'id': '', 'Name': '', });
lyr_roads_3.set('fieldImages', {'id': '', });
lyr_building_reprojected_1.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'area': 'no label', });
lyr_Buildings_2.set('fieldLabels', {'id': 'no label', 'Name': 'no label', });
lyr_roads_3.set('fieldLabels', {'id': 'no label', });
lyr_roads_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});