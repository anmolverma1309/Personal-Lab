import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, 0, 0),
    year: '2024',
    title: 'ABES Engineering College',
    subtitle: 'B.Tech Computer Science',
    position: 'right',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2025',
    title: 'Excelerate',
    subtitle: 'Data Visualization Intern',
    position: 'left',
  },
  {
    point: new THREE.Vector3(-3, -1, -6),
    year: '2026',
    title: 'Researcher',
    subtitle: 'ICMSCI 2026',
    position: 'left',
  },
  {
    point: new THREE.Vector3(0, -1, -10),
    year: '2026',
    title: 'DecodeLabs',
    subtitle: 'AIML Intern',
    position: 'left',
  },
  {
    point: new THREE.Vector3(1, 1, -12),
    year: 'FUTURE',
    title: 'AI & Software Development',
    subtitle: 'Building the future',
    position: 'right',
  }
]