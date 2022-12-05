import React from 'react';

const Prediction = () => {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-3 mt-6'>
                <input name='age' type="number" placeholder="age" className="input input-bordered w-full " required />
                <input name='sex' type="number" placeholder="sex" className="input input-bordered w-full " required />
                <input name='on_thyroxine' type="number" placeholder="on_thyroxine" className="input input-bordered w-full " required />
                <input name='pregnant' type="number" placeholder="pregnant" className="input input-bordered w-full" required />
                <input name='psych' type="number" placeholder="psych" className="input input-bordered w-full" required />
                <input name='TSH_measured' type="number" placeholder="TSH_measured" className="input input-bordered w-full" required />
                <input name='TSH' type="number" placeholder="TSH" className="input input-bordered w-full" required />
                <input name='T3_measured' type="number" placeholder="T3_measured" className="input input-bordered w-full" required />
                <input name='T3' type="number" placeholder="T3" className="input input-bordered w-full" required />
                <input name='TT4_measured' type="number" placeholder="TT4_measured" className="input input-bordered w-full" required />
                <input name='TT4' type="number" placeholder="TT4" className="input input-bordered w-full" required />
                <input name='FTI' type="number" placeholder="FTI" className="input input-bordered w-full" required />
            </div>
            {/* <textarea name='message' className="textarea h-24 w-full textarea-bordered" placeholder="Your Massege"></textarea> */}
            <input className='btn mt-3 bg-orange-700 mb-11' type="submit" value="prediction" />
        </div>
    );
};

export default Prediction;