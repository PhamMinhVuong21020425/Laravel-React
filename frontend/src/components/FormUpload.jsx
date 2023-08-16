import request from '../util/request';
import React, { useState } from 'react';
import { getCsrfToken } from '../util/CsrfToken';
const FormUpload = () => {
    const [file, setFile] = useState({
        upload: null,
    });

    getCsrfToken();

    const [res, setRes] = useState(null);

    const handleFileChange = event => {
        setFile({
            upload: event.target.files[0],
        });
        setRes(null);
    };

    const handleSubmit = async () => {
        //  console.log(file.upload);
        try {
            if (file.upload) {
                const res = await request.post('upload', file);
                setRes(res.data);
                setFile({
                    upload: null,
                });
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='flex items-center justify-center h-screen'>
            <label
                htmlFor='dropzone-file'
                className='flex flex-col relative items-center justify-center w-1/2 h-96 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'
            >
                <div className='flex flex-col items-center justify-center pt-5 pb-6 relative'>
                    <svg
                        className='w-8 h-8 mb-4 text-green-500 dark:text-gray-400'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 20 16'
                    >
                        <path
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
                        />
                    </svg>
                    <p className='mb-2 text-sm text-red-500 dark:text-gray-400'>
                        <span className='font-semibold'>Click to upload</span>{' '}
                        or drag and drop
                    </p>
                    <p className='text-sm text-gray-500 dark:text-gray-400'>
                        SVG, PNG, JPG, PDF or GIF
                    </p>
                </div>
                <input
                    id='dropzone-file'
                    type='file'
                    onChange={handleFileChange}
                    className='cursor-pointer text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100'
                />

                <button
                    className='bg-emerald-500 hover:bg-emerald-300 mt-3 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                    onClick={handleSubmit}
                    type='reset'
                >
                    Submit
                </button>
                {res && (
                    <div className='text-green-600 text-sm'>File is upload</div>
                )}
            </label>
        </div>
    );
};

export default FormUpload;
