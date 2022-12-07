using LMS.Data_Access_Layer;
using LMS.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LMS.Repository
{
    public class LeaveRepos : ILeave
    {
        private readonly LMS_DbContext lMS_DbContext;

        public LeaveRepos(LMS_DbContext lMS_DbContext)
        {
            this.lMS_DbContext = lMS_DbContext;
        }
        public async Task<int> AddLeaves(Leaves leaves)
        {
            var le = new LeaveDb()
            {
                LID = leaves.LID,
                LStatus = leaves.LStatus,
                LType=leaves.LType,
                Sdate=leaves.Sdate,
                Edate=leaves.Edate,
                EmpID=leaves.EmpID
            };
            lMS_DbContext.Leaves.Add(le);
            await lMS_DbContext.SaveChangesAsync();
            return le.LID;
        }

        public async Task<int> DeleteLeaves(int id)
        {
            var ar = lMS_DbContext.Leaves.Where(x => x.LID == id).FirstOrDefault();
            if (ar != null)
            {
                lMS_DbContext.Leaves.Remove(ar);
            }

            await lMS_DbContext.SaveChangesAsync();
            return ar.LID;
        }

        public async Task<List<Leaves>> LeaveDet()
        {
            List<Leaves> leavelst = new List<Leaves>();
            var ar = await lMS_DbContext.Leaves.ToListAsync();
            foreach (LeaveDb le in ar)
            {
                leavelst.Add(new Leaves
                {
                    LID = le.LID,
                    LStatus = le.LStatus,
                    LType=le.LType,
                    Sdate=le.Sdate,
                    Edate=le.Edate,
                    EmpID =le.EmpID
                }) ;
            }

            return leavelst;
        }

        public async Task<int> UpdateLeaves(int id, Leaves leave)
        {
            var ar = lMS_DbContext.Leaves.Where(x => x.LID == id).FirstOrDefault();
            if (ar != null)
            {
                
                ar.LStatus = leave.LStatus;
                ar.LType = leave.LType;
                ar.Sdate = ar.Sdate;
                ar.Edate = ar.Edate;
                ar.EmpID = ar.EmpID;
            }

            await lMS_DbContext.SaveChangesAsync();
            return ar.LID;
        }
    }
}
