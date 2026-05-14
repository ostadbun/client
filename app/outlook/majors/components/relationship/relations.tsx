'use client';

import { useEffect, useRef } from 'react';
import cytoscape from 'cytoscape';
import dagre from 'cytoscape-dagre';
import { UniversityTreeMockData1 } from '@/utils/mocks/trees/university';
import { Disjonction } from '@/components/osbn/table';
cytoscape.use(dagre);

export default function MajorGraph() {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const cy = cytoscape({
            container: containerRef.current,
            motionBlur: true,
            elements: UniversityTreeMockData1,
            style: [
                {
                    selector: 'node',
                    style: {
                        'background-color': 'transparent',
                        'background-opacity': 0.95,
                        label: 'data(label)',
                        color: 'white',
                        'text-valign': 'center',
                        'text-halign': 'center',
                        'font-size': '8rem',
                        'font-family': 'aradVF',
                        'text-wrap': 'wrap',
                        'text-max-width': '90px',
                        width: '56rem',
                        height: '56rem',
                        'border-width': 0.5,
                        'border-color': 'yellow',
                    },
                },
                {
                    selector: 'edge',
                    style: {
                        width: 1,
                        'line-color': 'var(--foreground)',
                        'target-arrow-color': '#94a3b8',
                        'target-arrow-shape': 'diamond',
                        'curve-style': 'round-taxi',
                        'arrow-scale': 1,
                    },
                },
            ],
            layout: {
                name: 'cose',
            },
        });

        return () => {
            cy.destroy();
        };
    }, []);

    return (
        <>
            <div
                className='border-foreground/10 border border-dashed w-10/12 h-192  mx-auto mt-14'
                ref={containerRef}

            >
                <div className="absolute -top-2 -right-[.53rem]">
                    <Disjonction />
                </div>

                <div className="absolute -bottom-2 -left-[.53rem]">
                    <Disjonction />
                </div>

            </div>


        </>
    );
}