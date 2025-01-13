import React from 'react';
import mapboxgl from 'mapbox-gl';
import { Alliance } from '@/data/alliances';

interface MapPopupProps {
  feature: mapboxgl.MapboxGeoJSONFeature;
  alliances: Alliance[];
  showAlliances: boolean;
}

export const createCountryPopup = (countryName: string, countryCode: string, alliances: Alliance[]): string => {
  const countryAlliances = alliances.filter(alliance => 
    alliance.members.some(member => member.code === countryCode)
  );
  
  const alliancesList = countryAlliances
    .map(alliance => `${alliance.name} (${alliance.members.find(m => m.code === countryCode)?.joinYear || 'N/A'})`)
    .join('<br>');

  return `
    <div class="font-semibold">${countryName}</div>
    <div class="text-sm text-gray-600">Member of:</div>
    <div class="text-sm">${alliancesList}</div>
  `;
};

export const createDisputePopup = (properties: any): string => {
  const disputeInfo: { [key: string]: string } = {
    'Kashmir': 'Disputed between India, Pakistan, and China since 1947',
    'Crimea': 'Annexed by Russia from Ukraine in 2014, internationally disputed',
    'West Bank': 'Disputed between Israel and Palestinian territories',
    'South China Sea': 'Multiple territorial disputes involving China, Vietnam, Philippines, and others',
    'Kuril Islands': 'Disputed between Japan and Russia since World War II',
    'Arunachal Pradesh': 'Disputed between India and China',
    'Senkaku Islands': 'Disputed between Japan and China',
    'Spratly Islands': 'Disputed between multiple Southeast Asian nations',
    'Paracel Islands': 'Disputed between China and Vietnam'
  };

  return `
    <div class="font-semibold">Disputed Territory</div>
    <div class="text-sm">${disputeInfo[properties.name] || 'Territory under dispute'}</div>
  `;
};