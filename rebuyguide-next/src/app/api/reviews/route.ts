import { NextRequest, NextResponse } from 'next/server';
import pool from '../../../../lib/db';

export async function POST(req: NextRequest) {
  try {
    const { body, rating, owner_id } = await req.json();
    const result = await pool.query(
      'INSERT INTO reviews (body, rating, owner_id) VALUES ($1, $2, $3) RETURNING *',
      [body, rating, owner_id]
    );
    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Error creating review:', error);
    return NextResponse.json({ error: 'Error creating review' }, { status: 500 });
  }
}