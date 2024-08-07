var wms_layers = [];

var format_Alberta_0 = new ol.format.GeoJSON();
var features_Alberta_0 = format_Alberta_0.readFeatures(json_Alberta_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Alberta_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alberta_0.addFeatures(features_Alberta_0);
var lyr_Alberta_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Alberta_0, 
                style: style_Alberta_0,
                popuplayertitle: "Alberta",
                interactive: false,
                title: '<img src="styles/legend/Alberta_0.png" /> Alberta'
            });
var format_Water_1 = new ol.format.GeoJSON();
var features_Water_1 = format_Water_1.readFeatures(json_Water_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Water_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Water_1.addFeatures(features_Water_1);
var lyr_Water_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Water_1, 
                style: style_Water_1,
                popuplayertitle: "Water",
                interactive: false,
                title: '<img src="styles/legend/Water_1.png" /> Water'
            });
var format_FishStockingPoints2024_2 = new ol.format.GeoJSON();
var features_FishStockingPoints2024_2 = format_FishStockingPoints2024_2.readFeatures(json_FishStockingPoints2024_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FishStockingPoints2024_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FishStockingPoints2024_2.addFeatures(features_FishStockingPoints2024_2);
var lyr_FishStockingPoints2024_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FishStockingPoints2024_2, 
                style: style_FishStockingPoints2024_2,
                popuplayertitle: "Fish Stocking Points (2024)",
                interactive: true,
    title: 'Fish Stocking Points (2024)<br />\
    <img src="styles/legend/FishStockingPoints2024_2_0.png" /> 0 - 2200<br />\
    <img src="styles/legend/FishStockingPoints2024_2_1.png" /> 2200 - 5600<br />\
    <img src="styles/legend/FishStockingPoints2024_2_2.png" /> 5600 - 11500<br />\
    <img src="styles/legend/FishStockingPoints2024_2_3.png" /> 11500 - 25000<br />\
    <img src="styles/legend/FishStockingPoints2024_2_4.png" /> 25000 - 60000<br />\
    <img src="styles/legend/FishStockingPoints2024_2_5.png" /> 60000 - 110000<br />'
        });

lyr_Alberta_0.setVisible(true);lyr_Water_1.setVisible(true);lyr_FishStockingPoints2024_2.setVisible(true);
var layersList = [lyr_Alberta_0,lyr_Water_1,lyr_FishStockingPoints2024_2];
lyr_Alberta_0.set('fieldAliases', {'fid': 'fid', 'PRUID': 'PRUID', 'DGUID': 'DGUID', 'PRNAME': 'PRNAME', 'PRENAME': 'PRENAME', 'PRFNAME': 'PRFNAME', 'PREABBR': 'PREABBR', 'PRFABBR': 'PRFABBR', 'LANDAREA': 'LANDAREA', });
lyr_Water_1.set('fieldAliases', {'fid_left': 'fid_left', 'HYDROUID': 'HYDROUID', 'NAME': 'NAME', 'RANK': 'RANK', 'PRUID_left': 'PRUID_left', 'index_righ': 'index_righ', 'fid_right': 'fid_right', 'PRUID_righ': 'PRUID_righ', 'DGUID': 'DGUID', 'PRNAME': 'PRNAME', 'PRENAME': 'PRENAME', 'PRFNAME': 'PRFNAME', 'PREABBR': 'PREABBR', 'PRFABBR': 'PRFABBR', 'LANDAREA': 'LANDAREA', });
lyr_FishStockingPoints2024_2.set('fieldAliases', {'DISTRICT': 'DISTRICT', 'WATERBODY': 'WATERBODY', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'SPECIES': 'SPECIES', 'GENOTYPE': 'GENOTYPE', 'STOCKED -': 'STOCKED -', 'STOCKING N': 'STOCKING N', 'PLANNED ST': 'PLANNED ST', 'Map Author': 'Map Author', 'StockNum': 'StockNum', 'StocknumNC': 'StocknumNC', 'StockNumN': 'StockNumN', 'SpecieFul': 'SpecieFul', 'SpeciesNME': 'SpeciesNME', 'PLNNEDST': 'PLNNEDST', });
lyr_Alberta_0.set('fieldImages', {'fid': 'TextEdit', 'PRUID': 'TextEdit', 'DGUID': 'TextEdit', 'PRNAME': 'TextEdit', 'PRENAME': 'TextEdit', 'PRFNAME': 'TextEdit', 'PREABBR': 'TextEdit', 'PRFABBR': 'TextEdit', 'LANDAREA': 'TextEdit', });
lyr_Water_1.set('fieldImages', {'fid_left': 'TextEdit', 'HYDROUID': 'TextEdit', 'NAME': 'TextEdit', 'RANK': 'TextEdit', 'PRUID_left': 'TextEdit', 'index_righ': 'TextEdit', 'fid_right': 'TextEdit', 'PRUID_righ': 'TextEdit', 'DGUID': 'TextEdit', 'PRNAME': 'TextEdit', 'PRENAME': 'TextEdit', 'PRFNAME': 'TextEdit', 'PREABBR': 'TextEdit', 'PRFABBR': 'TextEdit', 'LANDAREA': 'TextEdit', });
lyr_FishStockingPoints2024_2.set('fieldImages', {'DISTRICT': 'TextEdit', 'WATERBODY': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'SPECIES': 'TextEdit', 'GENOTYPE': 'TextEdit', 'STOCKED -': 'TextEdit', 'STOCKING N': 'TextEdit', 'PLANNED ST': 'TextEdit', 'Map Author': 'TextEdit', 'StockNum': 'TextEdit', 'StocknumNC': 'TextEdit', 'StockNumN': 'TextEdit', 'SpecieFul': 'Range', 'SpeciesNME': 'TextEdit', 'PLNNEDST': '', });
lyr_Alberta_0.set('fieldLabels', {'fid': 'no label', 'PRUID': 'no label', 'DGUID': 'no label', 'PRNAME': 'no label', 'PRENAME': 'no label', 'PRFNAME': 'no label', 'PREABBR': 'no label', 'PRFABBR': 'no label', 'LANDAREA': 'no label', });
lyr_Water_1.set('fieldLabels', {'fid_left': 'no label', 'HYDROUID': 'no label', 'NAME': 'no label', 'RANK': 'no label', 'PRUID_left': 'no label', 'index_righ': 'no label', 'fid_right': 'no label', 'PRUID_righ': 'no label', 'DGUID': 'no label', 'PRNAME': 'no label', 'PRENAME': 'no label', 'PRFNAME': 'no label', 'PREABBR': 'no label', 'PRFABBR': 'no label', 'LANDAREA': 'no label', });
lyr_FishStockingPoints2024_2.set('fieldLabels', {'DISTRICT': 'inline label - visible with data', 'WATERBODY': 'inline label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'SPECIES': 'inline label - visible with data', 'GENOTYPE': 'inline label - visible with data', 'STOCKED -': 'hidden field', 'STOCKING N': 'hidden field', 'PLANNED ST': 'inline label - visible with data', 'Map Author': 'header label - always visible', 'StockNum': 'inline label - always visible', 'StocknumNC': 'hidden field', 'StockNumN': 'hidden field', 'SpecieFul': 'hidden field', 'SpeciesNME': 'hidden field', 'PLNNEDST': 'hidden field', });
lyr_FishStockingPoints2024_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});