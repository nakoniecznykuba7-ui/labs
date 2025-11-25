/*
  # Create images table

  1. New Tables
    - `images`
      - `id` (uuid, primary key) - Unique identifier for each image
      - `filename` (text) - Original filename
      - `file_data` (bytea) - Binary image data
      - `mime_type` (text) - MIME type (e.g., image/png)
      - `file_size` (integer) - File size in bytes
      - `created_at` (timestamptz) - Timestamp when uploaded
      - `updated_at` (timestamptz) - Timestamp when last updated
  
  2. Security
    - Enable RLS on `images` table
    - Add policy for public read access to images
    - Add policy for authenticated users to insert images
*/

CREATE TABLE IF NOT EXISTS images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  filename text NOT NULL,
  file_data bytea NOT NULL,
  mime_type text NOT NULL DEFAULT 'image/png',
  file_size integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE images ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view images"
  ON images
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can upload images"
  ON images
  FOR INSERT
  TO authenticated
  WITH CHECK (true);